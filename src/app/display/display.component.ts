import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 product : Employee[];
 p:number = 1;
  constructor(private tab : TableService) { }
   getAllow(){
     this.tab.getData().subscribe(res =>{
       this.product= res;
       console.log(res);
     })
   }
  ngOnInit() {
    this.getAllow();
  }

}
