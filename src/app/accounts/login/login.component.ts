import { Component, OnInit } from '@angular/core'; 
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  show_header = false;
  login = false;
  userName;
  userPass;
  constructor(private url:LocationStrategy) { }

  ngOnInit() {
    if(this.url.path()==='/login'){
      this.login = true; 
    }
  }

}
