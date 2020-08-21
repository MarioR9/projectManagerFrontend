import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

projectsData = [];

  url= "http://localhost:8080/api/projects"

  
  constructor(private http: HttpClient ){
    this.http.get(this.url).toPromise().then(data =>{
      this.projectsData.push(data)
      console.log(this.projectsData)
    })
    
  }
 
  deleteProject($event){
   
    fetch(`http://localhost:8080/api/projects/${$event.currentTarget.parentElement.parentElement.id}`, {
    method: 'DELETE'})
    .then(resp => resp.json())
    .then(data=>{
        this.projectsData.push(data)
        //collenctin data from fetch
        })
  }


  ngOnInit() {
   
  }

}
