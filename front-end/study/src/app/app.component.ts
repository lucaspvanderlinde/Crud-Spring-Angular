import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Lista de Produto', icon: 'pi pi-list', routerLink: 'products' },
      { label: 'Cadastro de Produto', icon: 'pi pi-plus-circle', routerLink: 'add' },
    ];

    this.activeItem = this.items[0];
  }

}
