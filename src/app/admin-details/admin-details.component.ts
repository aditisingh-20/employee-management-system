import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-admin-details',
  standalone: true,
  imports: [HttpClientModule, NgIf, RouterLink],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css',
  providers: [HttpClient]
})
export class AdminDetailsComponent implements OnInit{
  jsonData: any;
  employeeInfo: any;
  username: string='';
  constructor(private route: ActivatedRoute, private http: HttpClient){
    this.username=this.route.snapshot.params['username']
  }
  ngOnInit(): void {
    this.http.get<any[]>('../../assets/employees.json').subscribe((users:any)=>{
      // console.log(users)
      this.jsonData=users.find((user:any)=>
        user.username==this.username);
        console.log(this.jsonData)
      });
  }
}
