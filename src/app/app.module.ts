import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
// import { ChatRoomPage } from '../pages/chat-room/chat-room';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { WeChatPage } from '../pages/we-chat/we-chat';

import { ChattingRoomService } from './services/chattingRoom.service';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'http://192.168.1.30:3001', options: {} };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    WeChatPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    WeChatPage
  ],
  providers: [
    StatusBar,
    ChattingRoomService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
