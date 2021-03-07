import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BookService } from './book.service';
import { IssueReturnService } from './issue-return.service';
import { MemberService } from './member.service';


@Injectable({
  providedIn: 'root'
})
export class RestApiMemberService {
  // http://localhost:8088/LibraryManage
  // Define API
  apiURL = 'http://localhost:8084/LibraryManage';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public loggedInUser: MemberService= {   
    name:"",
    phoneNumber: "",    
    email: "",    
    password: "",
    memberId:0
  }
  
  registerMember(member: MemberService): Observable<MemberService> {
    return this.http.post<MemberService>(this.apiURL + '/register', JSON.stringify(member), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  loginmember(memberId:any,password:any):Observable<MemberService>{
    return this.http.get<MemberService>(this.apiURL+'/login/'+memberId+'/'+password).
    pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  getAllAvailableBooks():Observable<BookService>{
   return  this.http.get<BookService>(this.apiURL+"/getAvailableBooks"). pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  getMember(memberId:any):Observable<MemberService>{
    return this.http.get<MemberService>(this.apiURL+"/getMember/"+memberId)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

updateMember(member:MemberService):Observable<MemberService>{
  return this.http.put<MemberService>(this.apiURL+"/updateMember",JSON.stringify(member),this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}


issueBook(issueData:IssueReturnService):Observable<IssueReturnService>{
  return this.http.post<IssueReturnService>(this.apiURL+"/issueBook",JSON.stringify(issueData),this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

returnBook(returnData:IssueReturnService):Observable<IssueReturnService>{
  return this.http.post<IssueReturnService>(this.apiURL+"/returnbook",JSON.stringify(returnData),this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

cancelMembership(memberId:any):Observable<MemberService>{
  return this.http.delete<MemberService>(this.apiURL+"/deleteMember/"+memberId)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

myIssuedBooks(memberId:any):Observable<BookService>{
  return this.http.get<BookService>(this.apiURL+"/myIssuedBooks/"+memberId)
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
