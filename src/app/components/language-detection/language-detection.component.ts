import { Component, OnInit } from '@angular/core';
import { languageDetection } from 'src/app/model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string = '';
  clean: boolean = false;
  loading: boolean = false;
  data: languageDetection = {
    time: 0,
    timestamp: '',
    detectedLangs: [
      {
        lang: '',
        confidence: 0,
      },
    ],
  };
  constructor(private service: RequestService) { }

  ngOnInit(): void {
  }

  detectedLanguage() {
    this.service.languageDetectionService(this.text, this.clean)
      .subscribe(data => {
        this.data = data;
        this.loading = true;
        console.log(data)
      })
  }

}
