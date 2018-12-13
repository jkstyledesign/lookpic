import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lookpic';
  
  Id='';
  Title='';
  Status='';
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  
  constructor(private http: HttpClient){
  }
 
  ngOnInit(): void {
    const showNavigationArrows = false;
    this.http.get('http://localhost:3000/Tasks').subscribe(data => {
      console.log(data);
    });
  }
  post() {        
    var data= {
    "Id": this.Id,
    "Title": this.Title,
    "Status": this.Status, 
    } 
    return this.http.post("http://localhost:3000/Tasks", data).subscribe((data) => {}); 
  }
  put() {        
    var data= {
    "Id": this.Id,
    "Title": this.Title,
    "Status": this.Status, 
    }  
    return this.http.put("http://localhost:3000/Tasks/"+this.Id, data).subscribe((data) => {}); 
  }
  update() {        
    var data= {
    "Id": this.Id,
    "Title": this.Title,
    "Status": this.Status, 
    }  
    return this.http.delete("http://localhost:3000/Tasks/"+this.Id).subscribe((data) => {}); 
  }

  


 




}

