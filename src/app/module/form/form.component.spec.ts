import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormModule } from './form.module';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from 'src/app/app.module';

describe('FormComponent', () => {
  let component: FormComponent;
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

  it('test function initForm', () => {
    expect(component.initForm()).toEqual(true);
  });
/*
  it('test function initFormByElement', () => {
    expect(component.initFormByElement()).toEqual(true);
  });
  */
});
