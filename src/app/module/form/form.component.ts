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
  name='person';

  filters= null;
  schemaform=null;

  dataform=null;
  element=null;

  public visible=false;

  constructor(private router: Router, private formBuilder: FormBuilder, 
    private dataService: DataService, private configformService: ConfigformService){
    this.filters= this.configformService.getFiltersForm(this.name); 
    this.schemaform= this.configformService.getConfigForm(this.name); 
  }

  setNameForm(name){
    this.name=name;
    this.filters= this.configformService.getFiltersForm(this.name); 
    this.schemaform= this.configformService.getConfigForm(this.name); 
    return true;
  }

  setElement(element){
    this.element= element;
    return this.element;
  }
  ngOnInit(){
    this.setElement(this.dataService.getElement());
    this.initForm();
  }


  initForm(){
    let form={};
    if(this.schemaform.length>0){
      for(let e of this.schemaform){
        let defaultValue=this.getValue(e);
        if(e.required){
          form[e.name]= [defaultValue, [Validators.required]];
        }else{
          form[e.name]= [defaultValue];
        }
      }
      if(this.element!=null) form['id']=this.element['id'];
      this.dataform= this.formBuilder.group(form);
      this.visible=true;
    }
    this.dataform= this.formBuilder.group(form);
    this.visible=true;
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

  save(){
    let result=0;
    if(this.element==null){
      this.dataService.add(this.dataform.value);
    }else{
      this.dataService.update(this.dataform.value);
    }
    this.router.navigate(['home']); 
  }

  back(){
    this.router.navigate(['home']);
  }
}
