import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { BookReturnComponent } from './book-return/book-return.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginMemberComponent } from './login-member/login-member.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { ShowAvailableBooksComponent } from './show-available-books/show-available-books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { AllIssuedBooksComponent } from './all-issued-books/all-issued-books.component';
import { MyIssuedBooksComponent } from './my-issued-books/my-issued-books.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AddBookComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    BookIssueComponent,
    BookReturnComponent,
    BookListComponent,
    ContactUsComponent,
    HomePageComponent,
    LoginMemberComponent,
    MemberUpdateComponent,
    MyProfileComponent,
    PagenotfoundComponent,
    RegisterMemberComponent,
    RemoveBookComponent,
    ShowAvailableBooksComponent,
    UpdateBookComponent,
    ViewBookComponent,
    ViewAllBooksComponent,
    AllIssuedBooksComponent,
    MyIssuedBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
