import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }
  opened = false;
  toggleSidebar() {
    this.opened = !this.opened;
  }
  viewinfra() {
   $("#viewinfrapopup").modal("show");
    
  }
}
