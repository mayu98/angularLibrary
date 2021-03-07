import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiAdminService } from '../shared/rest-api-admin.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  public bookId = this.actRoute.snapshot.params['bookId'];
  bookData: any = [];

  constructor(
    public restApi: RestApiAdminService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.restApi.getABook(this.bookId).subscribe((data: {}) => {
      this.bookData = data;
    })

  }
  updatebook() {
    if (window.confirm('Are you sure, you want to update?')) {

      this.restApi.updateBook(this.bookData[0]).subscribe(data => {
        this.router.navigate(['/adminhome/allbooks'])
      })
    }
  }

}
 

