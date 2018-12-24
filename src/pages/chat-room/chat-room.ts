import { Component } from '@angular/core';
import { IonicPage, NavParams, ToastController, NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
import { Http } from "@angular/http";
import { HttpHeaders, HttpClient } from '@angular/common/http';

var base_url = "http://192.168.1.30:3001"

@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
  messages = [];
  nickname = '';
  message = '';
  roomname = '';
  constructor(
    private navParams: NavParams,
    private socket: Socket,
    private toastCtrl: ToastController,
    public http: HttpClient,
    public navCtrl: NavController) {

    this.nickname = this.navParams.get('nickname');
    this.roomname = this.navParams.get('roomname');
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);

    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        // this.showToast('User left: ' + user);
      } else {
        // this.showToast('User joined: ' + user);
      }
    });
  }

  sendMessage() {
    this.socket.emit('add-message', { text: this.message, roomname:this.roomname});
    this.message = '';
  }
  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', (data) => {
        console.log(data)
        observer.next(data);
      });
    });
    return observable;
  }

  ionViewDidLeave() {
    console.log("leave")
    // this.socket.disconnect();
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  videoChat(){
    this.navCtrl.push("VideoRoomPage");
  }
}
