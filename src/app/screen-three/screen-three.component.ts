import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-three',
  templateUrl: './screen-three.component.html',
  styleUrls: ['./screen-three.component.css']
})
export class ScreenThreeComponent implements OnInit {
showSuccessMessage:boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  makePayment(){
  	this.showSuccessMessage = true;
    
  	setTimeout(()=>{
     this.router.navigate(['/screenfour']);
  	},3000);

  }

}
