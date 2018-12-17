import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TaskService {

    constructor(private http: HttpClient) {
       
    } 

    public getTask(): Observable<any> {
        return this.http.get('http://localhost:3000/Tasks');
    }
    
    public post(task: Task): Observable<any> {
        return this.http.post("http://localhost:3000/Tasks", task);
    }
    
    public update(task: Task):  Observable<any> { 
     return this.http.put("http://localhost:3000/Tasks/"+task.Id, task);
    }

    public delete(task: Task):  Observable<any> { 
        return this.http.delete("http://localhost:3000/Tasks/"+task);
    }

}