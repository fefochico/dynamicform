import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.list= this.dataService.getAll();
  }

  list=[];
  constructor(private dataService: DataService){}

  onInit(): void {
  }

  chosenEdit(obj){
    this.dataService.setElement(obj);
    document.getElementById('add').click();
  }
 
}
