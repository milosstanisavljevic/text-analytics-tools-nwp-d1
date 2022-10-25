export interface TextSimilarity {
    timestamp: string,
    similarity: number
}

export interface languageDetection {
    timestamp: string;
    time: number;
    detectedLangs: [
        {
            lang: string;
            confidence: number;
        }
    ]
}

export interface EntityExtraction {
    timestamp: string;
    time: number;
    lang: string;
    annotations: [
        {
            title: string;
            uri: string;
            image: {
                full: string;
                thumbnail: string;
            };
            abstract: string;
            categories: [];
        }

    ]
}

export interface SentimentAnalysis {
    timestamp: string;
    // time: number;
    // language: string;
    sentiment: {
        score: number;
        type: string;
    };
}

export interface Color {
    r: number;
    g: number;
    b: number;
}