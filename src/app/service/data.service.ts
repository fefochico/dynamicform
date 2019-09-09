import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data=[];
  chosenElement=null;
  index=1;

  constructor() { }

  public getAll(){
    return this.data;
  }

  public add(obj: any){
    if(obj!=null){
      obj.id=this.index;
      this.index++;
      this.data.push(obj);
    }
    return this.data;
  }
  
  public update(obj: any){
    if(obj!=null){
      let newData=[];
      for(let d of this.data){
        console.log(d.id);
        console.log(obj.id);
        if(d.id!=obj.id){
          newData.push(d);
        }else{
          newData.push(obj);
        }
      }
      this.data= newData;
    }
    return this.data;
  }

  public setElement(obj: Object){
    if(obj!=null){
      this.chosenElement=obj;
      return this.chosenElement;
    }
    return null;
  }

  public getElement(){
    return this.chosenElement;
  }
}
