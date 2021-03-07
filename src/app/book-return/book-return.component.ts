import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../shared/member.service';
import { RestApiMemberService } from '../shared/rest-api-member.service';

@Component({
  selector: 'app-book-return',
  templateUrl: './book-return.component.html',
  styleUrls: ['./book-return.component.css']
})
export class BookReturnComponent implements OnInit {


  constructor(public router: Router,
    public mrestapi:RestApiMemberService) { }
    
  public result:any=[];

@Input()
  public returnData:any={
    
    memberId:this.mrestapi.loggedInUser.memberId,
    bookId:""
  }
 public message:any;
  ngOnInit(): void {
  }



  return()
  {
     this.mrestapi.returnBook(this.returnData).subscribe((data:{})=>
     {
       this.result=data;
       if(this.result)
       {
         this.message="Returned Successfully...."
       }
     })
  }

}
