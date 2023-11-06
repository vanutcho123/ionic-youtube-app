import { Component, OnInit } from '@angular/core';
import { homeData } from 'src/app/utils/fetchData';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}
  videos: any = [];
  ngOnInit() {
    this.videos = homeData;
  }
}
