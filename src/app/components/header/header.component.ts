import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  videos: any = [];
  segments: any[] = [];
  constructor() {
    this.segments = [
      'All',
      'New to you',
      'Gaming',
      'Sitcoms',
      'Computer program',
      'Documentary',
      'Music',
    ].map((val) => ({
      title: val,
      selected: false,
    }));
  }
  ngOnInit(): void {
    this.selectSegment(0);
  }

  toggleTheme(event: any) {
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  selectSegment(i: any) {
    this.segments.map((item) => (item.selected = false));
    this.segments[i].selected = true;
  }
}
