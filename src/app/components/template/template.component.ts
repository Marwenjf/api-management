import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(public authService : AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
