import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data=[];
  chosenElement=null;
  constructor() { }

  public getAll(){
    return this.data;
  }

  public add(obj: Object){
    this.data.push(obj);
  }
  
  public update(obj: Object){
    this.data.map(x=>{
      if(x.nombre==obj['nombre']){
        x=obj;
      }
      return x;
    }) 
  }
  
  delete(){

  }

  public setElement(obj: Object){
    this.chosenElement=obj;
  }

  public getElement(){
    return this.chosenElement;
  }
}
