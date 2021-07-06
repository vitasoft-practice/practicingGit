import { hostViewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @HostListener('window:scroll' ,['$event'])
  onWindowScroll(){
    let element = document.querySelector('.navbar')as HTMLElement;

    if(window.pageYOffset > 700)
    {
      element.classList.add('navbar-inverse');
    }
      if(window.pageYOffset<20){
        
        element.classList.remove('navbar-inverse');
      }
      
    };
  
  constructor() { }

  ngOnInit(): void {}
  
}
