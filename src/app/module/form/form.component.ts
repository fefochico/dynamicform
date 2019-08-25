import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  result = [];
  title = 'dinamic-form';
  filters=[{ estado: [
      {value: 1, label: 'Niño'},
      {value: 2, label: 'Adulto'},
      {value: 3, label: 'Jubilado'}]
      ,profesion: [
      {value: 1, label: 'Estudiante'},
      {value: 2, label: 'Policía'},
      {value: 3, label: 'Jubilado'}]
  }];
  /* Valor obtenido de una petición externa o definidos aqui */
  elementform=[
    {order: 1, name: 'nombre', label: 'Nombre', type: 'text', dependency: 0, required: true},
    {order: 2, name: 'apellidos', label: 'Apellidos', type: 'text', dependency: 0, required: true},
    {order: 3, name: 'estado', label: 'Estado', type: 'select', dependency: 0, required: true, options:null},
    {order: 4, name: 'profesion', label: 'Profesión', type: 'multiselect', dependency: 0, required: false},
    {order: 4, name: 'observaciones', label: 'Observaciones', type: 'textarea', dependency: 0, required: false},
  ];

  name='persona';
  dataform=null;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private dataService: DataService){
  }

  ngOnInit(){
    let element= this.dataService.getElement();
    if(element==null){
      this.initForm();
    }else{
      this.initFormByElement();
    }
  }

  initForm(){
    let form={};
    for(let e of this.elementform){
      let defaultValue=null;
      if(e.type=='text' || e.type=='textarea'){
        defaultValue='';
      }
      if(e.required){
        form[e.name]= [defaultValue, [Validators.required]];
      }else{
        form[e.name]= [defaultValue];
      }
    }
    this.dataform= this.formBuilder.group(form);
  }

  initFormByElement(){
    let form={};
    for(let e of this.elementform){
      let defaultValue=null;
      if(e.type=='text' || e.type=='textarea'){
        defaultValue='';
      }
      if(e.required){
        form[e.name]= [defaultValue, [Validators.required]];
      }else{
        form[e.name]= [defaultValue];
      }
    }
    this.dataform= this.formBuilder.group(form);
  }

  save(){
    this.dataService.add(this.dataform.value);
    document.getElementById('back').click();
  }
}
