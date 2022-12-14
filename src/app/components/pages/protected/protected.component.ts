import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css'],
})
export class ProtectedComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  stringify(obj: Object) {
    return JSON.stringify(obj, null, ' ');
  }
}
