import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { ChatRoomPage } from '../chat-room/chat-room'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nickname: '';
  constructor(public navCtrl: NavController) {

  }
  // joinChat() {
  //   this.socket.connect();
  //   this.socket.emit('set-nickname', this.nickname);
  //   this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
  // }
}
