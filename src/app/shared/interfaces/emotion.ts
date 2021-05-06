export interface EmotionCategorization {
    anger: number;
    fear: number;
    joy: number;
    love: number;
    sadness: number;
    surprise: number;
}

export interface EmotionClassification {
    negative: number;
    neutral: number;
    positive: number;
}

export interface MessageInputResult {
    categorization: EmotionCategorization;
    emotion: keyof EmotionCategorization;
    response: string;
}
