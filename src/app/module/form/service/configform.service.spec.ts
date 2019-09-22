import { TestBed } from '@angular/core/testing';

import { ConfigformService } from './configform.service';


describe('ConfigformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let filterperson=[{ estado: [
    {value: 1, label: 'Niño'},
    {value: 2, label: 'Adulto'},
    {value: 3, label: 'Jubilado'}]
    ,profesion: [
    {value: 1, label: 'Estudiante'},
    {value: 2, label: 'Policía'},
    {value: 3, label: 'Jubilado'}]
  }];
  let name='person';

  //let person=PersonJson;
  let person=[
    {order: 1, name: 'nombre', label: 'Nombre', type: 'text', dependency: 0, required: true},
    {order: 2, name: 'apellidos', label: 'Apellidos', type: 'text', dependency: 0, required: true},
    {order: 3, name: 'estado', label: 'Estado', type: 'select', dependency: 0, required: true, options:null},
    {order: 4, name: 'profesion', label: 'Profesión', type: 'multiselect', dependency: 0, required: false},
    {order: 4, name: 'observaciones', label: 'Observaciones', type: 'textarea', dependency: 0, required: false},
  ];
  it('should be created', () => {
    const service: ConfigformService = TestBed.get(ConfigformService);
    expect(service).toBeTruthy();
  });
  it('Test function getFiltersForm empty', () => {
    const service: ConfigformService = TestBed.get(ConfigformService);
    expect(service.getFiltersForm('')).toEqual([]);
  });
  it('Test function getFiltersForm person', () => {
    const service: ConfigformService = TestBed.get(ConfigformService);
    expect(service.getFiltersForm(name)).toEqual(filterperson);
  });
  it('Test function getConfigForm empty', () => {
    const service: ConfigformService = TestBed.get(ConfigformService);
    expect(service.getConfigForm('')).toEqual([]);
  });
  it('Test function getConfigForm person', () => {
    const service: ConfigformService = TestBed.get(ConfigformService);
    expect(service.getConfigForm(name)).toEqual(person);
  });
});
