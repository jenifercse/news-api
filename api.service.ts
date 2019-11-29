
/*
@Author        : jenifer
@Description   : services for getting data
@Created       :  29 nov 2019
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
API_KEY = '7bf39893b113490eb363c96b4b8b9b01';
AP_KEY='a865e749938346a39d2172567cf0ea22';
  constructor(private httpClient: HttpClient) { }
  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
  public getSports(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${this.API_KEY}`);
  }
  public getEntertainment(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${this.API_KEY}`);
  }
  public getTechnical(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${this.API_KEY}`);
  }

  public getAsia(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=cn&apiKey=${this.API_KEY}`);
  }public getAustralia(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=au&apiKey=${this.API_KEY}`);
  }public getUk(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${this.API_KEY}`);
  }public getUs(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`);
  }public getUae(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=ae&apiKey=${this.API_KEY}`);
  }

  public getTamil(){
    return this.httpClient.get(`https://newsapi.org/v2/everything?q=tamil&language=ta&apiKey=${this.API_KEY}`);
  }

}
 