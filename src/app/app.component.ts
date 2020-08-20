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
  //test data


  fetch('http://localhost:8080/api/projects', {
    method: 'POST', // or 'PUT'
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      name: "Tonester",
      description: "Tonester was build using vanilla javascript for the frontend and rails for the backend. Tonester allows users to save albums using Spotify’s API.",
      startDate: "July 2019",
      endDate: "July 2019",
      githubLink: "https://github.com/MarioR9/tonester_frontend"}),
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
