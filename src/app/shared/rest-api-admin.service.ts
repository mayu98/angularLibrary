import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BookService } from './book.service';
import { catchError, retry } from 'rxjs/operators';
import { MemberService } from './member.service';
import { AllissuedService } from './allissued.service';

@Injectable({
  providedIn: 'root'
})
export class RestApiAdminService {


  // http://localhost:8088/LibraryManage
  // Define API
  apiURL = 'http://localhost:8084/LibraryManage';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public NewlyAddedBook: BookService = { 
bookId:'',
bookName:'',
author:'',
bookCount:0    
  }


  //-------------------------------------------
  // all CURD Opetations  That Admin Can Perform
  //--------------------------------------------

  //get all books

  getAllBooks(): Observable<BookService> {
    return this.http.get<BookService>(this.apiURL + '/getAllBooks')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )

  }


  //add book
  addBook(book:BookService): Observable<BookService> {
    return this.http.post<BookService>(this.apiURL + '/addBook',JSON.stringify(book), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

//delete book
deleteBook(bookId:any){
  return this.http.delete<BookService>(this.apiURL+'/deletebook/'+bookId,this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
 getABook(bookId:any):Observable<BookService>{
   return this.http.get<BookService>(this.apiURL+'/getaBook/'+bookId)
   .pipe(
    retry(1),
    catchError(this.handleError)
  )
 }

updateBook(book:BookService):Observable<BookService>{
  return this.http.put<BookService>(this.apiURL+'/updateBook',JSON.stringify(book), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
  }
   


  adminLogin(password:any):Observable<MemberService>{
    return this.http.get<MemberService>(this.apiURL+'/adminLogin/'+password)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )

  }

  allIssuedBooks():Observable<AllissuedService>
  {
    return this.http.get<AllissuedService>(this.apiURL+"/allIssuedBooks")
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  


  // Error handling 
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
















