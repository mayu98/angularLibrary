import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs/operators';
import { RestApiMemberService } from '../shared/rest-api-member.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  public  message: any;

  constructor(public router: Router,
    public mrestapi:RestApiMemberService) { }

memberData:any=[];

  ngOnInit(): void {

    this.mrestapi.getMember(this.mrestapi.loggedInUser.memberId).subscribe((data:{})=>
    {
      this.memberData=data;
    })
  }


  updateMember()  
  {
    if (confirm('Are you sure, you want to update?')) {
      {
        this.mrestapi.updateMember(this.memberData[0]).subscribe((data:{})=>{      
          
          this.mrestapi.loggedInUser=this.memberData;
          this.message="Updatad Successfully If you want to update again you can change the details";
          this.router.navigate(['/home/myprofile'])
         
      })
      }
    }
  }
  
  
cancelMemberShip()
  {
    if(confirm('Are you sure  you want to cancle your memberShip,if you cancle MemberShip then all the data related t u will be deleted. '))
    {
      this.mrestapi.cancelMembership(this.mrestapi.loggedInUser.memberId).subscribe((data)=>
      {
        this.router.navigate(['/register']);
      })
    }
  }

}
