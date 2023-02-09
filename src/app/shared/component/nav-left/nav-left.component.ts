import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss'],
})
export class NavLeftComponent {
  navs = [
    {
      link: '/',
      name: 'Home',
      icon: 'other_houses',
    },
    {
      link: '/',
      name: 'Get stared',
      icon: 'apps',
    },
    {
      link: '/',
      name: 'Develop',
      icon: 'code',
    },
    {
      link: '/',
      name: 'Team',
      icon: 'group_work',
    },
  ];
  navHoverIndex = -1;
  constructor() {}
}
