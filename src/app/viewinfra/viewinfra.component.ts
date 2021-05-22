import { Component, OnInit } from '@angular/core';
import { ViewinfraService } from './viewinfra.service';


@Component({
  // selector: 'app-viewinfra',
  selector: 'jw-modal', 
  templateUrl: './viewinfra.component.html',
  styleUrls: ['./viewinfra.component.scss']
})
export class ViewinfraComponent implements OnInit {

  bodyText: string;
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

   
//   openModal(id: string) {
//     this.dataService.open(id);
// }

// closeModal(id: string) {
//     this.dataService.close(id);
// }

