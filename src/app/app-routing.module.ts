import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './components/app/app.component';
import { EntityComponent } from './components/entity/entity.component';
import { HistoryComponent } from './components/history/history.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { TokenComponent } from './components/token/token.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: AppComponent
  // },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "entity",
    component: EntityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "language",
    component: LanguageDetectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "text",
    component: TextSimilarityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "token",
    component: TokenComponent
  },
  {
    path: "analysis",
    component: SentimentAnalysisComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
