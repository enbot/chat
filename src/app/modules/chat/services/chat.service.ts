import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommandService } from 'src/app/core/services/command.service';
import { ChatMessage } from 'src/app/shared/models/chat/chat-message';
import { EmotionRequestDTO, EmotionResponseDTO, CalculateRequestDTO, CalculateResponseDTO, MessageRequestDTO, MessageResponseDTO } from 'src/app/shared/interfaces/chat-requests'; // #
import { EmotionCategorization } from 'src/app/shared/interfaces/emotion';
import { Api } from 'src/app/core/constants/api';
import { HttpClient } from '@angular/common/http';
import { TypeSide } from 'src/app/shared/interfaces/metric-types';
import { ChatBalloonContent } from 'src/app/shared/interfaces/chat-balloon';
import { AnyCommandKey } from 'src/app/shared/interfaces/command-types';

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

    public async input(inputMessage: string): Promise<void> {
        this.propagateMessage(inputMessage, 'you', 'right', 'standard');

        const currentChatCategorization = this.currentChatCategorization;

        try {
            const emotionRequestDTO = this.serializeEmotionRequest(inputMessage);
            const emotionResponseDTO = await this.sendEmotionRequest(emotionRequestDTO);

            const calculateRequestDTO = this.serializeCalculateRequest(currentChatCategorization, emotionResponseDTO);
            const calculateResponseDTO = await this.sendCalculateRequest(calculateRequestDTO);

            const messageRequestDTO = this.serializeMessageRequest(inputMessage, calculateResponseDTO);
            const messageResponseDTO = await this.sendMessageRequest(messageRequestDTO);

            const newChatResponse = messageResponseDTO.data.response;
            const newChatCategorization = calculateResponseDTO.data.categorization;
            const newChatEmotion = calculateResponseDTO.data.emotion.name;

            console.log(newChatResponse);
            console.log(newChatCategorization);
            console.log(newChatEmotion);

            this.currentChatCategorization = newChatCategorization;

            this.propagateMessage(newChatResponse, 'enbot', 'left', 'standard');
            this.propagateEmotion(newChatEmotion);
        } catch (error) {
            this.propagateError('An internal error happened in my head.', 'enbot', 'left', 'danger');
        }
    }

    private propagateMessage(message: string, owner: string, side: TypeSide, content: ChatBalloonContent = 'standard'): void {
        this.onMessage.next(new ChatMessage(message, owner, side, content));
    }

    private propagateError(message: string, owner: string, side: TypeSide, content: ChatBalloonContent = 'standard'): void {
        this.onError.next(new ChatMessage(message, owner, side, content));
    }

    private propagateEmotion(emotion: string): void {
        // bot
        // const newChatCommand = this.getNewChatCommand(newChatEmotion);
        // const serializedMessageRequest = this.serializeMessageRequest(inputMessage, responseEmotion);

        // this.commandService.runCommand(newChatCommand);
        // return this.commandService.resolveCommand('bot', emotion);

        // console.log(this.commandService.resolveCommand('bot', 'normal'));

        // this.commandService.runCommand('CHANGE_EMOTION_NORMAL' as AnyCommandKey);
        // this.commandService.runCommand('CHANGE_EMOTION_ANGRY' as AnyCommandKey);
        // this.commandService.runCommand('CHANGE_EMOTION_SAD' as AnyCommandKey);
        // this.commandService.runCommand('CHANGE_EMOTION_HAPPY' as AnyCommandKey);
        // this.commandService.runCommand('CHANGE_EMOTION_BORED' as AnyCommandKey);
        // this.commandService.runCommand('CHANGE_EMOTION_CAREFUL' as AnyCommandKey);
        // this.commandService.runCommand('CHANGE_EMOTION_CONFUSED' as AnyCommandKey);

        //   <!-- bot commands -->
        //   CHANGE_EMOTION_NORMAL
        //   CHANGE_EMOTION_ANGRY
        //   CHANGE_EMOTION_SAD
        //   CHANGE_EMOTION_HAPPY
        //   CHANGE_EMOTION_BORED
        //   CHANGE_EMOTION_CAREFUL
        //   CHANGE_EMOTION_CONFUSED

        //   <!-- wallpaper commands -->
        //   CHANGE_SCENARIO_FOREST
        //   CHANGE_SCENARIO_SNOW

        // anger: 0.0,
        // fear: 0.0,
        // joy: 0.0,
        // love: 0.0,
        // sadness: 0.0,
        // surprise: 0.0,

        return;
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
