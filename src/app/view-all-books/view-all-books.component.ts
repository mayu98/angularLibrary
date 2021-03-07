import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiAdminService } from '../shared/rest-api-admin.service';

@Component({
  selector: 'app-view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrls: ['./view-all-books.component.css']
})
export class ViewAllBooksComponent implements OnInit {
  constructor(public router: Router, public restApi: RestApiAdminService) { }
     Books:any=[];
   


  ngOnInit(): void {
    this.loadBooks()
    }
  loadBooks()
  {
    return this.restApi.getAllBooks().subscribe((data:{})=>{
    this.Books=data;
    })
}
 
  deleteBook(bookId:any)
  {
        if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteBook(bookId).subscribe(data => {
        this.loadBooks()
      })
    }
  }
}
