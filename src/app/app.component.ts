import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from './components/showcase-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'projectManager';
  url = 'http://localhost:8080/api/projects'
 
  constructor(private http: HttpClient, private dialogService: NbDialogService){

  }
  
  open() {
    this.dialogService.open(ShowcaseDialogComponent, {
      //inputFields here for data collection
      
    });
    
  }
  
postFetch(){

  fetch('http://localhost:8080/api/projects', { //api
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
