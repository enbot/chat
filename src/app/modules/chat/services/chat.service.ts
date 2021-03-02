import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommandService } from 'src/app/core/services/command.service';
import { ChatMessage } from 'src/app/shared/models/chat/chat-message';
import { SerializedEmotionDTO, SerializedMessageDTO, ResponseEmotionDTO, ResponseMessageDTO } from 'src/app/shared/interfaces/chat-requests';
import { api } from 'src/app/core/api/paths';
import { HttpClient } from '@angular/common/http';
import { TypeSide } from 'src/app/shared/interfaces/metric-types';
import { ChatBalloonContent } from 'src/app/shared/interfaces/chat-balloon';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    public readonly onMessage: Subject<ChatMessage>;
    public readonly onError: Subject<Error>;

    constructor(
        private httpClient: HttpClient,
        private commandService: CommandService,
    ) {
        this.onMessage = new Subject();
        this.onError = new Subject();
    }

    public async input(inputMessage: string): Promise<void> {

        console.log(inputMessage);

        this.propagateMessage(inputMessage, 'you', 'right', 'standard');
        this.propagateMessage(inputMessage, 'enbot', 'left', 'standard');
        this.propagateMessage(inputMessage, 'enbot', 'left', 'warning');
        this.propagateMessage(inputMessage, 'enbot', 'left', 'danger');
        this.propagateMessage(inputMessage, 'enbot', 'left', 'rainbow');

        // this.propagateMessage(inputMessage, 'you', 'right', 'standard');
        // this.propagateMessage(inputMessage, 'enbot', 'left', 'standard');

        // const sentMessage = new ChatMessage(inputMessage, 'you', 'left');

        // const isCommand = this.commandService.isCommand(inputMessage);  // TEMP
        // if (isCommand) {
        //     return this.commandService.runCommand(inputMessage as AnyCommandKey);  // TEMP
        // }

        // this.onSend.next(sentMessage);

        try {
            // const serializedEmotionRequest = this.serializeEmotionRequest(inputMessage);

            // const { emotion: responseEmotion } = await this.inputChatMessage(serializedEmotionRequest);

            // const serializedMessageRequest = this.serializeMessageRequest(inputMessage, responseEmotion);

            // const { message: responseMessage } = await this.inputChatEmotion(serializedMessageRequest);

            // console.log(inputMessage);
            // console.log(responseEmotion);
            // console.log(responseMessage);

            // this.commandService.runCommand(response.command);

            // const sentMessage = new ChatMessage(request.content, 'you', 'left');
            // const receivedMessage = new ChatMessage(response.content, 'enbot', 'right');
            // this.onSend.next(sentMessage);
            // this.onReceive.next(receivedMessage);

            // TODO: comptute response and emit events
        } catch (error) {
            this.onError.next(error);
        }
    }

    private propagateMessage(message: string, owner: string, side: TypeSide, content: ChatBalloonContent = 'standard'): void {
        const chatMessage = new ChatMessage(message, owner, side, content);
        this.onMessage.next(chatMessage);
    }

    private inputChatMessage(serializedEmotionRequest: SerializedEmotionDTO): Promise<ResponseEmotionDTO> {
        return new Promise((resolve, reject) => {
            this.httpClient.post(`${api.emotion}/emotion/predict`, serializedEmotionRequest)
                .subscribe(
                    (response: any) => resolve(response),
                    (error: Error) => reject(error),
                );
        });
    }

    private inputChatEmotion(serializedMessageRequest: SerializedMessageDTO): Promise<ResponseMessageDTO> {
        return new Promise((resolve, reject) => {
            resolve({ message: 'xesque' });
        });
    }

    private serializeEmotionRequest(message: string): SerializedEmotionDTO {
        return {
            message,
        };
    }

    private serializeMessageRequest(message: string, emotion: string): SerializedMessageDTO {
        return {
            message,
            emotion,
        };
    }

}
