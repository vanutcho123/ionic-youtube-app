import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatePagePage } from '../create-page/create-page.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  toggleTheme(event: any) {
    console.log(event.target.checked);
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
  async handleCreate() {
    const modal = await this.modalController.create({
      component: CreatePagePage,
      breakpoints: [0.5],
      initialBreakpoint: 0.5,
      handle: false,
    });
    await modal.present();
  }
}
