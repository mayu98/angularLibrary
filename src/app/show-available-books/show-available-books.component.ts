import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiAdminService } from '../shared/rest-api-admin.service';

import { RestApiMemberService } from '../shared/rest-api-member.service';

@Component({
  selector: 'app-show-available-books',
  templateUrl: './show-available-books.component.html',
  styleUrls: ['./show-available-books.component.css']
})
export class ShowAvailableBooksComponent implements OnInit {

  constructor(public router: Router, public mrestApi: RestApiMemberService,
    public restapi: RestApiAdminService) { }

  public AvailableBooks: any = [];
  public newAddedBook:any=[]
 
  

  ngOnInit(): void {    
    //this.newAddedBook =this.restapi.NewlyAddedBook;
     this.restapi.getABook(this.restapi.NewlyAddedBook.bookId).subscribe((data: {}) => {
    this.newAddedBook = data;
     })    
    this.loadBooks()
  }

  
  loadBooks() {
    return this.mrestApi.getAllAvailableBooks().subscribe((data: {}) => {
      this.AvailableBooks = data;
    })
  }

}
