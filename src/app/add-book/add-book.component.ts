import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiAdminService } from '../shared/rest-api-admin.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @Input() BookDetails:any={
  bookId:'',
  bookName:'',
  author:'',
  bookCount:0    
  }

  constructor(
    public restApi:RestApiAdminService,
    public router:Router

  ) { }
  
  ngOnInit(): void {
  }
      
addBook()
{
  this.restApi.NewlyAddedBook=this.BookDetails;
  this.restApi.addBook(this.BookDetails).subscribe((data:{})=>
  {
    this.router.navigate(['/adminhome/allbooks'])
  })
}



}
