import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [HttpClient]
})
export class LoginComponent implements OnInit {
  loginForm=this.formBuilder.group({
    username: ['', Validators.required],
    password:['', Validators.required]
  });
  error: string='';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router){}
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username: ['', Validators.required],
      password:['', Validators.required]
    });
  }
  login(){
    const username=this.loginForm.get('username')?.value;
    const password=this.loginForm.get('password')?.value;
    this.http.get<any[]>('../../assets/users.json').subscribe((users:any)=>{
      const authenticatedUser=users.find((user:any)=>user.username==username && user.password == password);
      if(authenticatedUser){
        const isAdmin=users.find((user:any)=>user.username==username && user.admin==true);
        this.error='';
        if(isAdmin)
          this.router.navigate(['/admin-home']);
        else
          this.router.navigate(['/home'], {queryParams: {username: username}});
      }
      else{
        this.error='Invalid username or password';
      }
    })
  }
}
