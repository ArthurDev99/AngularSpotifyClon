import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>,
  } = {
    defaultOptions: [],
    accessLink: [],
  }

  customOptions: Array<any> = []

  constructor(){}

  ngOnInit():void {
    this.get_default_values()
  }

  get_default_values(): any {
    /*
      Genera datos por defecto para el cargue de opciones
    */

    this.mainMenu.defaultOptions = [
      {
        name: "Home",
        icon: "uil uil-estate",
        router: ['/']
      },
      {
        name: "Buscar",
        icon: "uil uil-search",
        router: ['/', 'history']
      },
      {
        name: "Tu Biblioteca",
        icon: "uil uil-chart",
        router: ['/', 'favorites']
      },
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

  }
}
