import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class SharedService {
  
  public isMobile:boolean = false;
  public static SERVER_URL: string = 'http://api.nakey.kz/';
  
  constructor(
    public router: Router,
    private httpClient: HttpClient
  ){
    this.isMobile = window.innerWidth <= 576?true:false;
  }
   
  static get token() {
    if (window.localStorage.getItem('auth_token')) {
      return window.localStorage.getItem('auth_token');
    }
    return null;
  }

  request(method, url, id = null, data = {}, customHeader = {}) {
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    // console.log(headers);
    if (customHeader) {
      for (const key of Object.keys(customHeader)) {
        headers.append(key, customHeader[key]);
      }
    }
    // console.log('token: ' + SharedService.token)
    // console.log(headers);
    if (SharedService.token) {
      // console.log("headers");
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + SharedService.token});
    }
    // console.log('HEADERS: ' + headers)
    if (id) {
      url = url.format(id);
    }
    // console.log(data, url, headers)
    return this.httpClient[method](SharedService.SERVER_URL+ url, data, {headers: headers});
  }
}
