import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userData = [];

  url= "http://localhost:8080/api/users"
  constructor(private http: HttpClient ){
    this.http.get(this.url).toPromise().then(data =>{
      this.userData.push(data)
      console.log(this.userData)
    })
    
  }

  ngOnInit(): void {
  }

}
