import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AllIssuedBooksComponent } from './all-issued-books/all-issued-books.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { BookReturnComponent } from './book-return/book-return.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginMemberComponent } from './login-member/login-member.component';
import { MyIssuedBooksComponent } from './my-issued-books/my-issued-books.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { ShowAvailableBooksComponent } from './show-available-books/show-available-books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = 

[
  { path: 'home', component:HomePageComponent},
  {path: 'adminlogin', component:AdminLoginComponent},
  {path: 'adminhome', component:AdminHomeComponent},
  { path: 'login', component: LoginMemberComponent},
  { path: '', pathMatch: 'full', component: LoginMemberComponent},
  { path: 'register' ,  component:RegisterMemberComponent},
  
  { path: 'home', component:HomePageComponent,
  children: [
    { path: 'myprofile' , component:MyProfileComponent},
    { path: 'issue' , component:BookIssueComponent},
    { path: 'return' , component:BookReturnComponent},
    { path: 'aboutus' , component:AboutUsComponent},
    { path: 'contactus' , component:ContactUsComponent},
    { path: 'available' , component:ShowAvailableBooksComponent},
    { path: 'myissuedbooks' , component:MyIssuedBooksComponent}
  ]
},
{path: 'adminhome', component:AdminHomeComponent,
children:[
  { path: 'addbook' , component:AddBookComponent},
  { path: 'updatebook/:bookId' , component:UpdateBookComponent},
  { path: 'viewbook' , component:ViewBookComponent},
  { path: 'allbooks' , component:ViewAllBooksComponent},
  { path: 'allissuedbooks' , component:AllIssuedBooksComponent}

]
},
{ path: '**' , component:PagenotfoundComponent}

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
