import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
name = ""
res = "new"
public callpoint = 0
page = 1
size = 15
data = ["select"]
val = ""


  constructor() { }

  ngOnInit(): void {
  }

  call(){
  this.page = this.page + 1 
    var http = new XMLHttpRequest();

  if (this.page > 0){
  	  http.open("GET", "http://docwedge.techwedge.com:8082/hms/specialization/getAllSpecialization?page=1&size=15", false);
 	  http.send()
 	  this.callpoint = this.callpoint + 10

 	  for (var i in JSON.parse(http.responseText)["specializationList"]){
 	  	this.val = JSON.parse(http.responseText)["specializationList"][i]["name"]
 	  	this.data.push(this.val)
 	  	this.page = this.page + 1 

 	  }
 
 alert(this.data[this.data.length - 1])

}
 	  
  }
  work(){
	
  
  }

 
  }
  


