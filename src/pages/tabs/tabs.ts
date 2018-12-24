import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { WeChatPage } from '../we-chat/we-chat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: 'Home',
        tabIcon: 'home'
      },
      {
        root: WeChatPage,
        tabTitle: 'WeChat',
        tabIcon: 'notifications'
      },
      {
        root: AboutPage,
        tabTitle: 'About',
        tabIcon: 'document'
      }
    ];
  }
}
