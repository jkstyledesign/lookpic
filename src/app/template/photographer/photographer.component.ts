import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.scss']
})
export class PhotographerComponent implements OnInit {
  userList;
  constructor(private users: UsersService) { } 

  ngOnInit() {
    this.userList = this.users.userList;
  }  
  
}
