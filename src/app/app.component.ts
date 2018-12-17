import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tasks;
  successfully_post = false;
  warning_post = false;
  btn_edit = false;
  Id = '';
  Title = '';
  Status = '';
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  private title = 'lookpic';

  constructor(private http: HttpClient, private taskService: TaskService) {
  }

  ngOnInit(): void {
    const showNavigationArrows = false;
    this.getTask();
  }


// GET WITH API 
  getTask() {
    this.taskService.getTask().subscribe((response) => {
      this.tasks = response;
    });
  }

  // POST WITH API 
  public post(): void {
    const data: Task = { Id: this.Id, Title: this.Title, Status: this.Status };
    this.taskService.post(data)
      .subscribe((response: any) => {
        this.successfully_post = true;
      },
        (error: any) => {
          this.warning_post = true;
        });
  }
  // UPDATE WITH API 
  public update(): void {
    const data: Task = { Id: this.Id, Title: this.Title, Status: this.Status };
    this.taskService.update(data)
      .subscribe((response: any) => {
        this.successfully_post = true;
      },
        (error: any) => {
          this.warning_post = true;
        });
  }
  // DELETE WITH API 
  public delete(id): void {
    this.taskService.delete(id)
      .subscribe((response: any) => {
        this.successfully_post = true;
      },
        (error: any) => {
          this.warning_post = true;
        });
  }

  // Reday to Update
  edit(Id, Title, Status) {
    this.Id = Id;
    this.Title = Title;
    this.Status = Status;
    this.btn_edit = true;
  }

}

