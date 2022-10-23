export interface TextSimilarity {
    timestamp: string,
    similarity: number
}
export interface languageDetection {
    timestamp: string;
    time: number;
    detectedLanguage: [
        {
            language: string;
            confidence: number;
        }
    ]
}