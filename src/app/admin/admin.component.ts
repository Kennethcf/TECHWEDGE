import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	public username = "";
	public password = "";
	public login = false;
	public form = true;
	public display : any;
	public tar = false


  constructor() {
  
   }

  ngOnInit(): void {
  
  }
  auth(){
  var http = new XMLHttpRequest();
  http.open("GET", "http://www.localhost:3000/admin?username="+this.username+"&password="+this.password+"&login=true", false);
  http.send();
  if (http.responseText.length > 2) {
  this.login = true;
  this.form = false;

  alert("sucess")

  }
  else
  {
  alert("invalid login")
  }

 }
 alert(a:any){
 	alert(a)

 }
 product(){

 }
 message(){
 var http = new XMLHttpRequest();
  http.open("GET", "http://www.localhost:3000/message", false);
  http.send();
  this.tar = true

  this.display = JSON.parse(http.responseText)


 }
}
