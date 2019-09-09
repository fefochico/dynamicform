import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { ConfigformService } from '../module/form/service/configform.service';

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
  configform=null;

  constructor(private dataService: DataService, private router: Router, private configformService: ConfigformService){
    this.configform=this.configformService.getConfigForm('persona');  
  }

  onInit(): void {
  }

  newElement(){
    this.dataService.setElement(null);
    this.router.navigate(['form']);
    return true; 
  }

  editElement(obj){
    if(obj!=null){
      this.dataService.setElement(obj);
      this.router.navigate(['form']); 
      return true;
    }
    return false;
  }
 
}
