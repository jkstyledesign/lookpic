import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  links = [
    {
      'url' : '/home',
      'page_name' : 'Home' 
    },
    {
      'url' : '/link',
      'page_name' : 'Link' 
    },
    {
      'url' : '',
      'page_name' : 'drop',
      'dropdown' :[
        {
          'url' : '/dropdown1',
          'page_name' : 'dropdown1' 
        },
        {
          'url' : '/dropdown2',
          'page_name' : 'dropdown2' 
        },
      ],  
    }
  ]
  userList = [
    {
      'propic' : 'assets/images/users/user1.jpg',
      'name' : 'Harinder Chahal',
      'gender' : 'female',
      'location' : 'Kuala Lumpur',
      'locations' : 'Kuala Lumpur, Winnipeg, Tamarin',
      'businessName' : 'Harinder pvt',
      'experience' : '5 year',
      'images': [
        {
  
        }
      ]
    },
    {
      'propic' : '',
      'name' : 'Harinder Chahal',
      'gender' : 'male',
      'location' : 'Kuala Lumpur',
      'locations' : 'Kuala Lumpur, Winnipeg, Tamarin',
      'businessName' : 'Harinder pvt',
      'experience' : '5 year',
      'images': [
        {
          
        }
      ]
    },
    {
      'propic' : '',
      'name' : 'Harinder Chahal',
      'gender' : 'male',
      'location' : 'Kuala Lumpur',
      'locations' : 'Kuala Lumpur, Winnipeg, Tamarin',
      'businessName' : 'Harinder pvt',
      'experience' : '5 year',
      'images': [
        {
          
        }
      ]
    },
    {
      'propic' : '',
      'name' : 'Harinder Chahal',
      'gender' : 'female',
      'location' : 'Kuala Lumpur',
      'locations' : 'Kuala Lumpur, Winnipeg, Tamarin',
      'businessName' : 'Harinder pvt',
      'experience' : '5 year',
      'images': [
        {
          
        }
      ]
    },
    {
      'propic' : '',
      'name' : 'Harinder Chahal',
      'gender' : 'male',
      'location' : 'Kuala Lumpur',
      'locations' : 'Kuala Lumpur, Winnipeg, Tamarin',
      'businessName' : 'Harinder pvt',
      'experience' : '5 year',
      'images': [
        {
          
        }
      ]
    },
    {
      'propic' : '',
      'name' : 'Harinder Chahal',
      'gender' : 'male',
      'location' : 'Kuala Lumpur',
      'locations' : 'Kuala Lumpur, Winnipeg, Tamarin',
      'businessName' : 'Harinder pvt',
      'experience' : '5 year',
      'images': [
        {
          
        }
      ]
    },
    {
      'propic' : '',
      'name' : 'Harinder Chahal',
      'gender' : 'male',
      'location' : 'Kuala Lumpur',
      'locations' : 'Kuala Lumpur, Winnipeg, Tamarin',
      'businessName' : 'Harinder pvt',
      'experience' : '5 year',
      'images': [
        {
          
        }
      ]
    },
    {
      'propic' : '',
      'name' : 'Harinder Chahal',
      'gender' : 'male',
      'location' : 'Kuala Lumpur',
      'locations' : 'Kuala Lumpur, Winnipeg, Tamarin',
      'businessName' : 'Harinder pvt',
      'experience' : '5 year',
      'images': [
        {
          
        }
      ]
    },
    {
      'propic' : '',
      'name' : 'Harinder Chahal',
      'gender' : 'male',
      'location' : 'Kuala Lumpur',
      'locations' : 'Kuala Lumpur, Winnipeg, Tamarin',
      'businessName' : 'Harinder pvt',
      'experience' : '5 year',
      'images': [
        {
          
        }
      ]
    }
    
  ]

}
