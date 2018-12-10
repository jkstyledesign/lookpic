import { Component, OnInit } from '@angular/core'; 
import { UsersService } from '../../services/users.service';
import {LocationStrategy} from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private link:UsersService, private url:LocationStrategy  ) { }
  links;
  someClass = true;
  isCollapsed = true;
  show_header = true;
  ngOnInit() { 
    this.links = this.link.links;
    if(this.url.path()==='/login' , '/signup'){
          this.show_header = false; 
    }
  }

  
  

  

}
