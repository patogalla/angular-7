import { Component, OnInit, HostBinding, ElementRef, Renderer2, Renderer } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: []
})
export class SideBarComponent implements OnInit{

  private active= false;
  constructor(private el:ElementRef, private render: Renderer2){
    }
 
  toggle() {
    this.active=!this.active;
    
  }

  ngOnInit(){
    console.log("init sideBarComponent");
  }

}
