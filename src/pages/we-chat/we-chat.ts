import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpHeaders, HttpClient } from '@angular/common/http'
var base_url = "http://192.168.1.30:3001"
/**
 * Generated class for the WeChatPage page.
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
  selector: 'page-we-chat',
  templateUrl: 'we-chat.html',
})
export class WeChatPage {
  nickname: ''
  roomname = ''
  users = []
  status = false
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public toastCtrl: ToastController,
              public http: HttpClient) {
    // this.getUserNameStatus().subscribe((data)=>{
    //   this.status = data['status']
    //   if(this.status === true){
    //     // this.socket.emit('set-nickname', this.nickname);
    //     this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
    //   }else{
    //     this.showToast("user already exist");
    //   }
    // })
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this.roomname = text;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeChatPage');
  }

  joinChat() {
    // this.socket.emit('check-nickname', this.nickname);
    this.http.post(
      base_url + '/roomNumber',
      {"roomname": this.roomname},
      httpOptions).toPromise()
      .then((res)=>{
        if(res){
          this.navCtrl.push('ChatRoomPage', { nickname: this.nickname, roomname: this.roomname });
        }else{
          alert("create failed");
        }
      })
  }
  getUserNameStatus(){
    // let observable = new Observable(observer=>{
    //   this.socket.on('name-status',(data)=>{
    //     observer.next(data)
    //   })
    // })
    // return observable;
    // this.socket.emit('set-nickname', this.nickname);
    // this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
  }
  // showToast(msg) {
  //   let toast = this.toastCtrl.create({
  //     message: msg,
  //     duration: 2000
  //   });
  //   toast.present();
  // }
}
