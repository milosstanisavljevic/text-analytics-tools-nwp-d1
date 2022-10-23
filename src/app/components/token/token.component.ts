import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  token: string;
  constructor(private tokenService: TokenService) {
    this.token = this.tokenService.getToken();
  }

  ngOnInit(): void {
  }

  saveToken() {
    this.tokenService.saveToken(this.token);
  }
}
