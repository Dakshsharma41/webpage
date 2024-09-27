import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/class/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  
  roleList : IRole [] = [];
http = inject(HttpClient);
// constructor(private http: HttpClient){

// }

ngOnInit(): void {
    this.getAllRoles()
}

getAllRoles(){
  this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:APIResponseModel)=>{
    this.roleList= res.data;
  })

}










// firstName:string="Angular";
//  angularVersion ="Version 18";
//  version: number=18;
//  isActive :boolean=false;
//  currentDate:Date=new Date();
//  inputType: string ="radio";
//  selectedState: string ='';

//  showWelcomeAlert (){
// alert("Welome Bro")
//  }
//  showMessage(message:string){
// alert(message)
//  }
// 
}
