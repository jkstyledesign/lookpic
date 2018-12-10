import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public featuresBox = false;
  showCaption = true;
  constructor() { }

  ngOnInit() {
  }

  featuresAction() {
    this.featuresBox = !this.featuresBox; 
    this.showCaption = !this.featuresBox;
  }

}
