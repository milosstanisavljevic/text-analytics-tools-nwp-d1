import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SentimentAnalysis } from 'src/app/model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  sentimentForm: FormGroup;
  data: SentimentAnalysis = {
    timestamp: '',
    lang: '',
    sentiment: {
      score: 0,
      type: '',
    },
  };
  dataAvailable: boolean = false;
  sentimentColor: any;

  constructor(private service: RequestService, private formBuilder: FormBuilder) {
    this.sentimentForm = this.formBuilder.group({
      sentimentText: ['', Validators.required],
      lang: []
    });
  }

  ngOnInit(): void {
  }
  sentimentAnalysis() {
    this.service
      .SentimentAnalysisService(
        this.sentimentForm.get('sentimentText')?.value,
        this.sentimentForm.get('lang')?.value
      )
      .subscribe(data => {
        console.log(data);
        this.data = data;
        this.setColor(data.sentiment.score);
        this.dataAvailable = true;
      });
  }

  setColor(score: number) {
    let normalizedScore = (score + 1) / 2;

    let normalizedRed = 255 + (0 - 255) * normalizedScore;
    let normalizedGreen = 0 + (255 - 0) * normalizedScore;
    let normalizedBlue = 0 + (0 - 0) * normalizedScore;

    let red = normalizedRed * 2 - 1;
    let green = normalizedGreen * 2 - 1;
    let blue = normalizedBlue * 2 - 1;

    this.sentimentColor = `rgb(${red},${green},${blue})`;
    console.log("boja")
    console.log(this.sentimentColor);
  }

}
