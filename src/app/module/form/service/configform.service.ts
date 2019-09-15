import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigformService {

  filterperson=[{ estado: [
    {value: 1, label: 'Niño'},
    {value: 2, label: 'Adulto'},
    {value: 3, label: 'Jubilado'}]
    ,profesion: [
    {value: 1, label: 'Estudiante'},
    {value: 2, label: 'Policía'},
    {value: 3, label: 'Jubilado'}]
  }];
  /* Valor obtenido de una petición externa o definidos aqui */
  person=[
    {order: 1, name: 'nombre', label: 'Nombre', type: 'text', dependency: 0, required: true},
    {order: 2, name: 'apellidos', label: 'Apellidos', type: 'text', dependency: 0, required: true},
    {order: 3, name: 'estado', label: 'Estado', type: 'select', dependency: 0, required: true, options:null},
    {order: 4, name: 'profesion', label: 'Profesión', type: 'multiselect', dependency: 0, required: false},
    {order: 4, name: 'observaciones', label: 'Observaciones', type: 'textarea', dependency: 0, required: false},
  ];


  constructor() { }

  getFiltersForm(nameservice: string){
    if(nameservice=='person'){
      return this.filterperson;
    }
    return [];
  }

  getConfigForm(nameservice: string){
    if(nameservice=='person'){
      return this.person;
    }
    return [];
  }
}
