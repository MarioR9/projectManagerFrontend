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

  fetch('http://localhost:8080/api/projects', {
    method: 'POST', // or 'PUT'
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      name: "test1",
      description: "test2",
      startDate: "July test",
      endDate: "July test",
      githubLink: "https://test"}),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }

}
