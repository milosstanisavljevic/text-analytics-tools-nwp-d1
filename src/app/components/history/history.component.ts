import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: string[] = [];
  constructor(private service: RequestService) {
    this.history = this.service.getHistory();
  }

  ngOnInit(): void {
  }

}
