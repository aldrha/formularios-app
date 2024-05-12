import { Component } from '@angular/core';

interface Menu {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {

  templateMenu: Menu[] = [
    {
      texto: 'Básicos',
      ruta: 'template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: 'template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: 'template/switches'
    }
  ];

  reactiveMenu: Menu[] = [
    {
      texto: 'Básicos',
      ruta: 'reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: 'reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: 'reactive/switches'
    }
  ];
}
