import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoRoomPage } from './video-room';

@NgModule({
  declarations: [
    VideoRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoRoomPage),
  ],
})
export class VideoRoomPageModule {}
