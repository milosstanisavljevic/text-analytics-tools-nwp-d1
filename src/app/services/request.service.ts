import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityExtraction, languageDetection, SentimentAnalysis, TextSimilarity } from '../model';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly api = environment.mainApi
  constructor(private httpClient: HttpClient, private tokenService: TokenService) {

  }
  findSimilarityService(text1: string, text2: string): Observable<TextSimilarity> {
    let token = this.tokenService.getToken();
    let params = {
      text1,
      text2,
      token
    }
    return this.httpClient.get<TextSimilarity>(`${this.api}/sim/v1`, { params, });
  }

  languageDetectionService(text: string, isTextClean: boolean): Observable<languageDetection> {
    let token = this.tokenService.getToken();
    let params = {
      text,
      isTextClean,
      token,
    }
    return this.httpClient.get<languageDetection>(`${this.api}/li/v1`, { params, });
  }
  SentimentAnalysisService(language: string, text: string): Observable<SentimentAnalysis> {
    let token = this.tokenService.getToken();
    let params = {
      language,
      text,
      token
    };

    return this.httpClient.get<SentimentAnalysis>(`${this.api}/sent/v1/`, { params, });
  }
  EntityExtractionService(text: string, min_confidence: number, includeImage: boolean, includeAbstract: boolean, includeCategories: boolean): Observable<EntityExtraction> {
    let token = this.tokenService.getToken();
    let include: string[] = [];
    if (includeImage != null) { include.push('image') }
    if (includeAbstract != null) { include.push('abstract') }
    if (includeCategories != null) { include.push('categories') }
    let params = {
      text,
      min_confidence,
      include,
      token
    };

    return this.httpClient.get<EntityExtraction>(`${this.api}/nex/v1/`, { params, });
  }
}
