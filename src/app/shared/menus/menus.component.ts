import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
@Component({
  selector: '[app-menus]',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit { 
  constructor(private link:UsersService ) { }
  links;
  ngOnInit() { 
    this.links = this.link.links;
  }
}
