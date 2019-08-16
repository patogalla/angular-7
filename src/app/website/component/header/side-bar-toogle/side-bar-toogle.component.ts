import { Component, OnInit, Input, HostListener } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-side-bar-toogle',
  templateUrl: './side-bar-toogle.component.html',
  styles: []
})
export class SideBarToogleComponent implements OnInit{
  @Input() sideBar: SideBarComponent;
  @HostListener('click')
  click() {
    this.sideBar.toggle();
  }

  ngOnInit(){
    console.log('init SideBarToggle');
  }
}
