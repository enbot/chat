import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommandService } from 'src/app/core/services/command.service';
import { ChatMessage } from 'src/app/shared/models/chat/chat-message';
import { EmotionRequestDTO, EmotionResponseDTO, CalculateRequestDTO, CalculateResponseDTO, MessageRequestDTO, MessageResponseDTO } from 'src/app/shared/interfaces/chat-requests'; // #
import { EmotionCategorization, MessageInputResult } from 'src/app/shared/interfaces/emotion';
import { Api } from 'src/app/core/constants/api';
import { HttpClient } from '@angular/common/http';
import { ChatBalloonContent } from 'src/app/shared/interfaces/chat-balloon';
import { TypeSide } from 'src/app/shared/interfaces/metric-types';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    public readonly onMessage: Subject<ChatMessage>;
    public readonly onError: Subject<ChatMessage>;
    private currentChatCategorization: EmotionCategorization;

    constructor(
        private httpClient: HttpClient,
        private commandService: CommandService,
    ) {
        this.onMessage = new Subject();
        this.onError = new Subject();
        this.currentChatCategorization = {
            anger: 0.0,
            fear: 0.0,
            joy: 0.0,
            love: 0.0,
            sadness: 0.0,
            surprise: 0.0,
        };
    }

    public async input(baseMessage: string): Promise<void> {
        const currentCategorization = this.currentChatCategorization;
        const messages = baseMessage.split(/[.!?]/).filter(message => !!message);

        const chatResponses: string[] = [];
        const chatEmotions: string[] = [];
        const chatErrors: string[] = [];

        this.propagateMessage(baseMessage, 'you', 'right');

        for (const message of messages) {
            try {
                const { emotion, response, categorization } = await this.requestChatResponse(message, currentCategorization);

                this.currentChatCategorization = categorization;

                chatResponses.push(response);
                chatEmotions.push(emotion);
            } catch (error) {
                chatErrors.push(error.message);
            }
        }

        if (chatErrors.length === 0) {
            this.propagateMessage([...new Set(chatResponses)].join(' '), 'enbot', 'left');
            this.propagateEmotion(chatEmotions[chatEmotions.length - 1]);
        } else {
            this.propagateError('An internal error happened in my head.', 'enbot', 'left');
        }
    }

    private async requestChatResponse(message: string, categorization: EmotionCategorization): Promise<MessageInputResult> {
        const emotionRequestDTO = this.serializeEmotionRequest(message);
        const emotionResponseDTO = await this.sendEmotionRequest(emotionRequestDTO);
        const calculateRequestDTO = this.serializeCalculateRequest(categorization, emotionResponseDTO);
        const calculateResponseDTO = await this.sendCalculateRequest(calculateRequestDTO);
        const messageRequestDTO = this.serializeMessageRequest(message, calculateResponseDTO);
        const messageResponseDTO = await this.sendMessageRequest(messageRequestDTO);

        return {
            categorization: calculateResponseDTO.data.categorization,
            emotion: calculateResponseDTO.data.emotion.name,
            response: messageResponseDTO.data.response,
        };
    }

    private propagateMessage(message: string, owner: string, side: TypeSide, content: ChatBalloonContent = 'standard'): void {
        this.onMessage.next(new ChatMessage(message, owner, side, content));
    }

    private propagateError(message: string, owner: string, side: TypeSide, content: ChatBalloonContent = 'danger'): void {
        this.onError.next(new ChatMessage(message, owner, side, content));
    }

    private propagateEmotion(emotion: string): void {
        const command = this.commandService.resolveCommand('bot', emotion);
        this.commandService.runCommand(command);
    }

    private sendEmotionRequest(emotionRequestDTO: EmotionRequestDTO): Promise<EmotionResponseDTO> {
        return new Promise((resolve, reject) => {
            this.httpClient.post(`${Api.CORE}/emotion/predict`, emotionRequestDTO)
                .subscribe(
                    (response: any) => resolve(response),
                    (error: Error) => reject(error),
                );
        });
    }

    private sendCalculateRequest(calculateRequestDTO: CalculateRequestDTO): Promise<CalculateResponseDTO> {
        return new Promise((resolve, reject) => {
            this.httpClient.post(`${Api.CORE}/emotion/calculate`, calculateRequestDTO)
                .subscribe(
                    (response: any) => resolve(response),
                    (error: Error) => reject(error),
                );
        });
    }

    private sendMessageRequest(calculateRequestDTO: MessageRequestDTO): Promise<MessageResponseDTO> {
        return new Promise((resolve, reject) => {
            this.httpClient.post(`${Api.CORE}/response/process`, calculateRequestDTO)
                .subscribe(
                    (response: any) => resolve(response),
                    (error: Error) => reject(error),
                );
        });
    }

    private serializeEmotionRequest(message: string): EmotionRequestDTO {
        return {
            message,
        };
    }

    private serializeCalculateRequest(currentChatCategorization: EmotionCategorization, serializedEmotionResponse: EmotionResponseDTO): CalculateRequestDTO {
        return {
            new: serializedEmotionResponse.data.categorization,
            current: currentChatCategorization,
        };
    }

    private serializeMessageRequest(message: string, calculateResponseDTO: CalculateResponseDTO): MessageRequestDTO {
        const emotion = calculateResponseDTO.data.emotion.name;
        return {
            message,
            emotion,
        };
    }
}
