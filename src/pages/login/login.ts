import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Http } from "@angular/http";
import { HttpHeaders, HttpClient } from '@angular/common/http'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'xsrfCookieName':  'csrftoken',
    // 'xsrfHeaderName': 'X-CSRFToken'
  })
};

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement){
    this.http.post('http://192.168.1.30:3001/api/auth/user/login',
                  {'username':username.value, 'password': password.value}
                  , httpOptions).toPromise()
    .then(res=>{
      if(res){
        this.navCtrl.push(TabsPage);
      }else{
        alert("login failed");
      }
    })
    // if(username.value==password.value){
    //   this.navCtrl.push(TabsPage)
    // }else{
    //   alert("login failed123")
    // }
  }
}
