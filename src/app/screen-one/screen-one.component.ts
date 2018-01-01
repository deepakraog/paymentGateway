import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-one',
  templateUrl: './screen-one.component.html',
  styleUrls: ['./screen-one.component.css']
})
export class ScreenOneComponent implements OnInit {
  bank:any='--choose--';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  makePayment(){
  	if(this.bank == 'sg'){
     this.router.navigate(['/screentwo']);
  	}else{
  		alert("Kindly select a Bank from dropdown");
  	}
  	
  }

}
