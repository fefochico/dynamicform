import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormModule } from './form.module';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { DataService } from 'src/app/service/data.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let dataservice: DataService;
  let fixture: ComponentFixture<FormComponent>;

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

  it('test function setNameForm', () => {
    expect(component.setNameForm('person')).toEqual(true);
  });

  it('test function setElement', () => {
    expect(component.setElement({test: 'test'})).toEqual({test: 'test'});
  });

  it('test function initForm', () => {
    expect(component.initForm()).toEqual(1);
  });

  it('test function initForm without values form', () => {
    component.setNameForm(null);
    expect(component.initForm()).toEqual(0);
  });

  it('test function getValue select', () => {
    expect(component.getValue({type: 'select'})).toEqual(null);
  });

  it('test function getValue textarea', () => {
    expect(component.getValue({type: 'textarea'})).toEqual('');
  });

  it('test function getValue text', () => {
    expect(component.getValue({type: 'text'})).toEqual('');
  });

  it('test function getValue text', () => {
    component.setElement({nombre: 'test'});
    expect(component.getValue({order: 1, name: 'nombre', label: 'Nombre', type: 'text', dependency: 0, required: true},
    )).toEqual('test');
  });

  it('test function getValue text', () => {
    expect(component.getValue({type: 'text'})).toEqual('');
  });

  it('test function save add', () => {
    expect(component.save()).toEqual(1);
  });

  it('test function save update', () => {
    component.setElement({nombre: 'test'});
    expect(component.save()).toEqual(2);
  });

  it('test function back', () => {
    expect(component.back()).toEqual(true);
  });
});
