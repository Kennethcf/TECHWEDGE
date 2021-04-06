import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
 public z = [] = 
 [
{
	"title":"Clinics/Polyclinics",
	"period":"5 Users (monthly subscription)",
	"features" :["Quick to use cloud-hosted application","Record your appointments and update diagnosis/prescription, Lab, Admin reports / dashboard"],
},

{
	"title":"Nursing Homes",
	"period":"10 Users, Multi-location (monthly subscription)",
	"features" :["Quick to use cloud-hosted application"," Record your appointments and update diagnosis/prescription, Lab, Admin reports/dashboard"],
},
{
	"title":"Hospitals",
	"period":"Enterprise - Multi-location",
	"features" :["Cloud hosted application with Appointment"," Clinical Diagnosis, Lab & Pharmacy integrated to clinical diagnosis","Insurance-based Billing & Admin Dashboard/Reports"],
}





]
  constructor() { }

  ngOnInit(): void {
 

  }

};




