import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { EntityComponent } from './components/entity/entity.component';
import { HistoryComponent } from './components/history/history.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { TokenComponent } from './components/token/token.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },
  {
    path: "entity",
    component: EntityComponent
  },
  {
    path: "language",
    component: LanguageDetectionComponent
  },
  {
    path: "text",
    component: TextSimilarityComponent
  },
  {
    path: "token",
    component: TokenComponent
  },
  {
    path: "analysis",
    component: SentimentAnalysisComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
