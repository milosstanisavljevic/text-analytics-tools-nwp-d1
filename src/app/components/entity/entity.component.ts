import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntityExtraction } from 'src/app/model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
  text: string = ''
  min_confidence: number = 0;
  include: string = '';
  entityForm: FormGroup;
  data: EntityExtraction = {
    annotations: [
      {
        title: '',
        image: {
          full: '',
          thumbnail: '',
        },
        uri: '',
        abstract: '',
        categories: [],
      },
    ],
    lang: '',
    time: 0,
    timestamp: '',
  };
  dataAvailable: boolean = false;
  includeImage: boolean = false;
  includeAbstract: boolean = false;
  includeCategories: boolean = false;

  constructor(private formbuilder: FormBuilder, private service: RequestService) {
    this.entityForm = this.formbuilder.group({
      entityText: ['', Validators.required],
      confidence: [],
      includeImage: [],
      includeAbstract: [],
      includeCategories: [],
    })
  }

  ngOnInit(): void {
  }
  entityExtract(): void {
    this.includeImage = this.entityForm.get('includeImage')?.value;
    this.includeAbstract = this.entityForm.get('includeAbstract')?.value;
    this.includeCategories = this.entityForm.get('includeCategories')?.value;
    this.service.EntityExtractionService(
      this.entityForm.get('entityText')?.value,
      this.entityForm.get('confidence')?.value,
      this.entityForm.get('includeImage')?.value,
      this.entityForm.get('includeAbstract')?.value,
      this.entityForm.get('includeCategories')?.value
    )
      .subscribe((data) => {
        console.log(data);
        this.data = data;
        this.dataAvailable = true;
      });

  }
}
