import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiMemberService } from '../shared/rest-api-member.service';

@Component({
  selector: 'app-login-member',
  templateUrl: './login-member.component.html',
  styleUrls: ['./login-member.component.css']
})
export class LoginMemberComponent implements OnInit {

  constructor(public router: Router
    , public mrestapi: RestApiMemberService) { }


  @Input()
  logindata: any = {
    memberId: 0,
    password: ''
  }
    getdata: any;
  ngOnInit(): void {
  }
  login() {
    this.mrestapi.loginmember(this.logindata.memberId,this.logindata.password).subscribe((data) => {
      this.getdata = data;
      if (this.getdata) {
        if (this.getdata.memberId == this.logindata.memberId && this.getdata.password == this.getdata.password) {
          this.mrestapi.loggedInUser=this.getdata;
          this.router.navigate(['/home/available'])
        }
      }     
      else {
        alert("User name or password is incorrect! Please login with valid information.");
      } })
}







      
    

}
