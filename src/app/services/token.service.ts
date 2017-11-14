import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Constants } from './../constants/constants';

@Injectable()
export class TokenService {

  private authData$: string = `grant_type=password&username=${Constants.Username}&password=${Constants.Password}&ApplicationOrigin=1`;
  private accessToken: string = '';

  get AccessToken(): string {
    return this.accessToken;
  }

  constructor(private http : Http) { 
    //  Let's first try to get the token from localstorage, and if it exists set this as a property
    //  on the service.
    let lsToken = localStorage.getItem('token');
    if (lsToken) {
      this.accessToken = lsToken;
    }
    else {
      this.CreateNewToken();
    }
  }

  //  Sets the token to the localstorage to be shared throughout the application
  CreateNewToken(){
    this.http.post(Constants.TokenUrl, this.authData$).toPromise()
    .then((d) => {
      this.accessToken = d.json().access_token;
      localStorage.setItem('token', this.accessToken);
    });
  }

}
