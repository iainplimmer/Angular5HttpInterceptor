import { Component } from '@angular/core';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  template: `
    <ast-data-list></ast-data-list>
  `
})
export class AppComponent {
  title = 'app';

  constructor(private tokenService: TokenService) {
    //  First things first let's try to create a token....
    this.tokenService.CreateNewToken();

  }
}
