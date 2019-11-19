import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormModule } from './form.module';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { ConfigformService } from './service/configform.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let name='person';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is form valid when empty', ()=> {
    expect(component.dataform.valid).toBeFalsy();
  });

  it('is form valid when required fields', ()=> {
    let configformService= new ConfigformService();
    let schemaform1= configformService.getConfigForm(name); 
    for(let ele of schemaform1){
      if(ele.required){
        component.dataform.controls[ele.name].setValue("test");
      }
    }
    expect(component.dataform.valid).toBeTruthy();
  });

  it('is form valid when edit fields', ()=> {
    let configformService= new ConfigformService();
    let schemaform2= configformService.getConfigForm(name);
    let item={};
    for(let ele of schemaform2){
      if(ele['type']=='text' || ele['type']=='textarea'){
        item[ele.name]='test';
      }
      if(ele['type']=='select' || ele['type']=='multiselect'){
        item[ele.name]=1;
      }
    }
    component.setElement(item);
    component.initForm()
    expect(component.dataform.valid).toBeTruthy();
  });
});
