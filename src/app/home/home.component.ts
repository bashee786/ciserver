import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { MatDialog } from '@angular/material/dialog';
import { ViewinfraComponent } from '../viewinfra/viewinfra.component';


declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router,
  public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  opened = false;
  toggleSidebar() {
    this.opened = !this.opened;
  }
  openDialog(): void {
    // send data to component [can be any data]
    let data = {
      content: 'Happy Coding',
    }
    const dialogRef = this.dialog.open(ViewinfraComponent, {
      width: '80%',
      height:'80%',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // usign jquery to open modal within component. use this funtion on button click
  viewInfra() {
    jQuery(`#viewinfrapopup`).modal("show");
  }
  // you can also use this. (same as above)
  closeInfra() {
   jQuery(`#viewinfrapopup`).modal("hide");
  }
}
