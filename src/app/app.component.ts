import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'projectManager';
  
  url = 'http://localhost:8080/api/projects'
 
  constructor(private http: HttpClient){

  }
  postFetch(){

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded'}
  const body = { 
      name: "test1",
      description:"test description",
      startDate: "now",
      endDate: "tomorrow",
      githubLink: "na" }
  this.http.post<any>('http://localhost:8080/api/projects', body, { headers }).subscribe(data => {
      console.log(data)
  })
  }
}
