import { Component, OnInit } from '@angular/core';
import { RestApiAdminService } from '../shared/rest-api-admin.service';

@Component({
  selector: 'app-all-issued-books',
  templateUrl: './all-issued-books.component.html',
  styleUrls: ['./all-issued-books.component.css']
})
export class AllIssuedBooksComponent implements OnInit {

  
  constructor( public restapi:RestApiAdminService) { }

  public allissuedBooks:any=[];

  ngOnInit(): void {
    this.restapi.allIssuedBooks().subscribe((data:{})=>

    {
        this.allissuedBooks=data;

    })


  }

}
