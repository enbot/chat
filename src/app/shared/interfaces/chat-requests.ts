import { EmotionCategorization, EmotionClassification } from './emotion';

export interface EmotionRequestDTO {
    message: string;
}

export interface EmotionResponseDTO {
    data: {
        categorization: EmotionCategorization;
        classification: EmotionClassification;
    };
    success: boolean;
}

export interface CalculateRequestDTO {
    new: EmotionCategorization;
    current: EmotionCategorization;
}

export interface CalculateResponseDTO {
    data: {
        categorization: EmotionCategorization;
        emotion: {
            amount: number;
            name: keyof EmotionCategorization;
        }
    };
    success: boolean;
}

export interface MessageRequestDTO {
    message: string;
    emotion: string;
}

export interface MessageResponseDTO {
    data: {
        response: string;
    };
    success: boolean;
}
