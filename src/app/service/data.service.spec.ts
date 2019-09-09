import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let service: DataService;
  it('should be created', () => {
    service= TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
  let array=[];
  let array2=[];
  let element={ name: '1' , surname: '2'};
  let element2={ id: 1, name: '1' , surname: '2'};
  let editedelement={ id: 1, name:'3', surname: '4'};
  let newelement2={ id: 1, name:'3', surname: '4'};

  array.push(element2);
  array2.push(newelement2);

  it('Test function getAll empty', ()=>{
    service= TestBed.get(DataService);
    expect(service.getAll()).toEqual([]);
  });

  it('Test function getAll 1 element', ()=>{
    service = TestBed.get(DataService);
    service.add(element);
    expect(service.getAll()).toEqual(array);
  });

  it('Test function add empty', ()=>{
    service = TestBed.get(DataService);
    expect(service.add(null)).toEqual([]);
  });

  it('Test function add 1 element', ()=>{
    service = TestBed.get(DataService);
    expect(service.add(element)).toEqual(array);
  });

  it('Test function update empty', ()=>{
    service = TestBed.get(DataService);
    expect(service.update(null)).toEqual([]);
  });
  
  it('Test function update 1 element', ()=>{
    service = TestBed.get(DataService);
    service.add(element);
    expect(service.update(editedelement)).toEqual(array2);
  });

  it('Test function setElement empty', ()=>{
    service = TestBed.get(DataService);
    expect(service.setElement(null)).toEqual(null);
  });

  it('Test function setElement 1 element', ()=>{
    service = TestBed.get(DataService);
    expect(service.setElement(editedelement)).toEqual(editedelement);
  });

  it('Test function getElement', ()=>{
    service = TestBed.get(DataService);
    service.setElement(editedelement);
    expect(service.getElement()).toEqual(editedelement);
  });

});
