import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [HttpClientModule, NgFor, RouterModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css',
  providers: [HttpClient]
})
export class AdminHomeComponent implements OnInit{
  jsonData: any;
  constructor(private http: HttpClient, private router: Router){}
  ngOnInit(): void {
    this.jsonData=this.getData()
  }
  getData(): any{
    this.http.get<any[]>('../../assets/employees.json').subscribe((users:any)=>{
      this.jsonData=users;
      return this.jsonData
  })
}
}
