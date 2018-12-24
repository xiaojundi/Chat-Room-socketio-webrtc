import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VideoRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-room',
  templateUrl: 'video-room.html',
})
export class VideoRoomPage {

  public my_videogateway: any = null;
  server:any  = ["https://example.com:HTTPS_PORT/webrtc-gateway"];
  iceServers:any  = [ ];
  debugLevel:any = 'error';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var myVideoApp = new VideoRTC(endPoints, iceServers, debugLevel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoRoomPage');
  }

}
