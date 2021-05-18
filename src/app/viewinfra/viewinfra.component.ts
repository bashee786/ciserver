import { Component, OnInit } from '@angular/core';
import { ViewinfraService } from './viewinfra.service';

@Component({
  selector: 'app-viewinfra',
  templateUrl: './viewinfra.component.html',
  styleUrls: ['./viewinfra.component.scss']
})
export class ViewinfraComponent implements OnInit {

  servers = [];
  prodData = [];
  constructor(private dataService: ViewinfraService) { }
  
  ngOnInit() {

    this.dataService.prodData().subscribe((data: any[])=>{
      console.log(data);
      this.prodData = data;
    })

    this.dataService.serversData().subscribe((data: any[])=>{
      console.log(data);
      this.servers = data;
    })  
  }

}
