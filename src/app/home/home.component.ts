import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HttpClient]
})
export class HomeComponent implements OnInit{
  jsonData: any;
  employeeInfo: any;
  username: string='';
  constructor(private route: ActivatedRoute, private http: HttpClient){}
  ngOnInit(): void {
    this.jsonData=this.getData()
    this.route.queryParams.subscribe(params=>{
      this.username=params['username'];
    });
  }
  getData(): any{
    this.http.get<any[]>('../../assets/employees.json').subscribe((users:any)=>{
      // console.log(users)
      const loggedInUser=users.find((user:any)=>
        user.username==this.username);
        this.jsonData= loggedInUser;
      });
  }
}
