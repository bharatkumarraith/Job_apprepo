import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { joblisting } from '../model/joblist';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-role-list',
  templateUrl: './job-role-list.component.html',
  styleUrls: ['./job-role-list.component.css']
})
export class JobRoleListComponent implements OnInit {

joblisting:joblisting[]=[];
jobrole:any;
joblocation:any;
  constructor(private res:JobServiceService){}
  ngOnInit(): void {
    this.res.getJobRoles().subscribe(response=>{
      this.joblisting=response;
    })
  }

  search()
  {

    if(this.jobrole == "")
    {
      this.ngOnInit();
    }
    else{
      this.joblisting=this.joblisting.filter(res=>{
        return res.jobrole?.toLowerCase().match(this.jobrole.toLocaleLowerCase());
      })
    }
  }

  searchh()
  {
    
    if(this.joblocation == "")
    {
      this.ngOnInit();
    }
    else{
      this.joblisting=this.joblisting.filter(res=>{
    return res.joblocation?.toLowerCase().match(this.joblocation.toLocaleLowerCase());
      })
    }
  }

 apply()
 {

  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: 'Your application has been successfully submitted.',
    confirmButtonText: 'OK'
  });

 }
}
