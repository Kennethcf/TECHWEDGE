import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
 public display : any


  constructor() { }

  ngOnInit(): void {
 

  }
product(){
	var http = new XMLHttpRequest();
  http.open("GET", "http://www.localhost:3000/product", false);
  http.send();

  this.display = JSON.parse(http.responseText)
  


}

};





