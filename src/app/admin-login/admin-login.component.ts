import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiAdminService } from '../shared/rest-api-admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLogin:any={
    memberId:1000,
    password:'admin'
  }
  adminData:any
  public loginInfo:any;
  constructor(public router: Router,
    public restapi:RestApiAdminService
    
    ) { }

  ngOnInit(): void {
  }
  login()
  {
    this.restapi.adminLogin(this.adminLogin.password).subscribe((data) => {
      this.adminData = data;
      if (this.adminData) {
        if (this.adminData.memberId == this.adminLogin.memberId && this.adminData.password == this.adminLogin.password) {

          this.router.navigate(['/adminhome/allbooks'])
        }
      }     
      else {
        alert("Admin  password is incorrect! Please login with valid Password as 'admin'.");
      } })



  }
  

 


}

