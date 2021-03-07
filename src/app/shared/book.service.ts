import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  
  public bookId:any;
  public bookName:any;
  public author:any;
  public bookCount:any; 

}
