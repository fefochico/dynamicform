import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { ConfigformService } from './service/configform.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  result = [];
  title = 'dinamic-form';
  name='persona';

  filters= null;
  elementform=null;

  dataform=null;
  element=null;

  constructor(private router: Router, private formBuilder: FormBuilder, 
    private dataService: DataService, private configformService: ConfigformService){
    this.filters= this.configformService.getFiltersForm('persona'); 
    this.elementform= this.configformService.getConfigForm('persona'); 
  }

  ngOnInit(){
    this.element= this.dataService.getElement();
    this.initForm();
  }

  initForm(){
    let form={};
    if(this.elementform.length>0){
      for(let e of this.elementform){
        let defaultValue=this.getValue(e);
        if(e.required){
          form[e.name]= [defaultValue, [Validators.required]];
        }else{
          form[e.name]= [defaultValue];
        }
      }
      if(this.element!=null) form['id']=this.element['id'];
      this.dataform= this.formBuilder.group(form);
      return true;
    }
    this.dataform= this.formBuilder.group(form);
    return false;
  }

  getValue(e){
    if(this.element==null){
      if(e.type=='text' || e.type=='textarea'){
        return '';
      }else{
        return null;
      }
    }
    return this.element[e.name];
  }
/*
  initFormByElement(){
    let form={};
    if(this.elementform.length>0){
      for(let e of this.elementform){
        let defaultValue=this.element[e.name];
        if(e.required){
          form[e.name]= [defaultValue, [Validators.required]];
        }else{
          form[e.name]= [defaultValue];
        }
      }
      form['id']=this.element['id'];
      this.dataform= this.formBuilder.group(form);
      return true;
    }
    this.dataform= this.formBuilder.group(form);
    return false;
  }
*/
  save(){
    if(this.element==null){
      this.dataService.add(this.dataform.value);
    }else{
      this.dataService.update(this.dataform.value);
    }
    this.router.navigate(['home']); 
    return true;
  }

  volver(){
    this.router.navigate(['home']);
    return true;
  }
}
