import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiAdminService } from '../shared/rest-api-admin.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  searchId:any;
  bookData:any=[];

  constructor(
    public router: Router,
    public restapi:RestApiAdminService,
     ) { }

  ngOnInit(): void {
  }
  getAbook()
{
  this.restapi.getABook(this.searchId).subscribe((data:{})=>
  this.bookData=data) 
}
}
