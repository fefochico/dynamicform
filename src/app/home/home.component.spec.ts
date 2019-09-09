import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));
  let element={ id: 1, name: '1' , surname: '2'};

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Test function newElement', () => {
    expect(component.newElement()).toEqual(true);
  });

  it('Test function editElement empty', () => {
    expect(component.editElement(null)).toEqual(false);
  });

  it('Test function editElement empty', () => {
    expect(component.editElement(element)).toEqual(true);
  });
});
