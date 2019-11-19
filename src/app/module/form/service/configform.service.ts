import { Injectable } from '@angular/core';
import personData from './../../../../assets/json/form/person.json';
import personFiltersData from '../../../../assets/json/filters/person.json';
@Injectable({
  providedIn: 'root'
})
export class ConfigformService {
  
  filterperson = personFiltersData;
  person=personData;
 
  constructor() { }

  getFiltersForm(nameservice: string){
    if(nameservice=='person'){
      return this.filterperson;
    }
    if(nameservice=='company'){
      return [];
    }
    return [];
  }

  getConfigForm(nameservice: string){
    if(nameservice=='person'){
      return this.person;
    }
    if(nameservice=='company'){
      return [];
    }
    return [];
  }

  getColumns(){
    let columns=[];
    let list= this.person;
    for(let e of list){
      if(!this.exist(columns, e.column)) columns.push(e.column);
    }
    return columns;
  }

  getRows(){
    let rows= [];
    let list= this.person;
    for(let e of list){
      if(!this.exist(rows, e.row)) rows.push(e.row);
    }
    console.log(rows);
    return rows;
  }

  exist(list, element){
    for(let e of list){
      if(element==e){
        return true;
      }
    }
    return false;
  }

  existRowsInColumn(c, r){
    let list= this.person;
    for(let e of list){
      if(e.row==r && e.column==c){
        return true;
      }
    }
    return false;
  }
}
