import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs/operators';

import { RestApiMemberService } from '../shared/rest-api-member.service';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent implements OnInit {

  constructor(public router: Router,
    public mrestapi: RestApiMemberService

  ) { }

  public result: any = []
 public message:any;
  @Input()
  public issueData: any = {

    memberId: this.mrestapi.loggedInUser.memberId,
    bookId: ""
  }

  ngOnInit(): void {
  }
  issue() {
    this.mrestapi.issueBook(this.issueData).subscribe((data: {}) => {
       this.result = data;
       if(this.result)
       {
         
         this.message="Issued SuccessFully";
       }
    })





  }

}
