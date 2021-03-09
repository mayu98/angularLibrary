

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiMemberService } from '../shared/rest-api-member.service';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {
  constructor(public router: Router,
    public mrestapi: RestApiMemberService
  ) {

  }
  @Input() memberdata: any = {
    memberId: '',
    name: '',
    password: '',
    email: '',
    phoneNumber: ''
  }

  registerData:any=[];
  ngOnInit(): void {
  }

  register() {
    if (this.memberdata.memberId == 0 && this.memberdata.name == null && this.memberdata.password == null && this.memberdata.email == null && this.memberdata.phoneNumber == null) {
      window.alert("fields should be filled ")
    }
    else {
      this.mrestapi.registerMember(this.memberdata).subscribe((data:{}) => {
       this.registerData=data;
        window.alert("Registered successfully!! Remember the Password and Login with your  MemberID:"+this.registerData.memberId);
        this.router.navigate(['/login'])
      })
    }
  }
}