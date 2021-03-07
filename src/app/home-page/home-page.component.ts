import { Component, Input, OnInit } from '@angular/core';
import { RestApiMemberService } from '../shared/rest-api-member.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public date =new Date();
  public name:any;
public id:any;
  constructor(
    public mrestapi:RestApiMemberService
  ) { }

  ngOnInit(): void {
   this.name=this.mrestapi.loggedInUser.name;
   this.id=this.mrestapi.loggedInUser.memberId;
  }

}
