import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Constants } from './../constants/constants';

@Injectable()
export class TokenService {

  private authData$: string = `grant_type=password&username=${Constants.Username}&password=${Constants.Password}&ApplicationOrigin=1`;
  private accessToken: string = '';

  //  Getter to return the currenly set access token
  get AccessToken(): string {
    if (this.accessToken === '') {
      this.accessToken = localStorage.getItem('token');
    }
    return this.accessToken;
  }

  constructor(private httpClient : HttpClient) { }

  //  Sets the token to the localstorage to be shared throughout the application
  CreateNewToken(){
    this.httpClient.post(Constants.TokenUrl, this.authData$)
      .subscribe((d) => {
        this.accessToken = d['access_token'];
        localStorage.setItem('token', this.accessToken);
      });
  }

}
