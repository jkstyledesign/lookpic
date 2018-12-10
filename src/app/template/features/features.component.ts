import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  FeaturesData = [
    {
      'image' : './assets/images/icons/home_dietitian2_pic1.png',
      'title' : 'Over 300 food products',
      'description' : 'Nam egestas, velit blandit tincidunt interdum lectus lorem maximus'
    },
    {
      'image' : './assets/images/icons/home_dietitian2_pic1.png',
      'title' : 'Over 300 food products',
      'description' : 'Nam egestas, velit blandit tincidunt interdum lectus lorem maximus'
    },
    {
      'image' : './assets/images/icons/home_dietitian2_pic1.png',
      'title' : 'Over 300 food products',
      'description' : 'Nam egestas, velit blandit tincidunt interdum lectus lorem maximus'
    }
    
  ]

  ngOnInit() {
    this.FeaturesData;
  }

}
