import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public name = "";
  public mobile = "";
  public Email = "";
  public message = "";

  constructor() { }

  ngOnInit(): void {

  }
  work(username="terence",password="terence"){
    var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 || this.status == 201) {
    	alert("your record was submitted")
    }
  };
  http.open("POST", "http://www.localhost:3000/message", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
  http.send("name="+this.name+"&mobile="+this.mobile+"&Email="+this.Email+"&message="+this.message);
  }

}







