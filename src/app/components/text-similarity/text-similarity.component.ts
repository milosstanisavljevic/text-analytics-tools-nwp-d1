import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextSimilarity } from 'src/app/model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  similarityForm: FormGroup;
  similarity: TextSimilarity = {
    timestamp: '',
    similarity: 0
  }

  constructor(private service: RequestService, private formBuilder: FormBuilder) {
    this.similarityForm = this.formBuilder.group({
      text1: ['', Validators.required],
      text2: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }
  findTextSimilarity(): void {
    this.service.findSimilarityService(
      this.similarityForm.get('text1')?.value,
      this.similarityForm.get('text2')?.value,
    ).subscribe(similarity => {
      this.similarity = similarity;
      console.log(similarity);
    })
  }
}
