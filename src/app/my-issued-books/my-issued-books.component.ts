import { Component, OnInit } from '@angular/core';
import { RestApiAdminService } from '../shared/rest-api-admin.service';
import { RestApiMemberService } from '../shared/rest-api-member.service';

@Component({
  selector: 'app-my-issued-books',
  templateUrl: './my-issued-books.component.html',
  styleUrls: ['./my-issued-books.component.css']
})
export class MyIssuedBooksComponent implements OnInit {

  constructor(

    public mrestapi:RestApiMemberService
  ) { }
  
public myIssuedBooks:any=[];



  ngOnInit(): void {
    this.mrestapi.myIssuedBooks(this.mrestapi.loggedInUser.memberId).subscribe((data:{})=>
    {
      this.myIssuedBooks=data;
    })




  }

}
