import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpHeaders, HttpClient } from '@angular/common/http'

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // 'xsrfCookieName':  'csrftoken',
      // 'xsrfHeaderName': 'X-CSRFToken'
    })
  };
var base_url = "http://192.168.1.30:3001"
@Injectable()
export class ChattingRoomService{
    
    constructor(private http: HttpClient){
    }
    public gettingMessageList(){
    //    return this.http.get(base_url).subscribe(res => {
    //        return res
    //    });
    }
}