import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = [
    {display: 'Home', href: 'http://www.maxtrain.com', title: 'MAX'},
    {display: 'Google', href: 'http://www.google.com', title: 'Goog'},
    {display: 'Microsoft', href: 'http://www.microsoft.com', title: 'MS'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
