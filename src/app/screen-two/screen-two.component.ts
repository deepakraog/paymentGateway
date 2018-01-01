import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-two',
  templateUrl: './screen-two.component.html',
  styleUrls: ['./screen-two.component.css']
})
export class ScreenTwoComponent implements OnInit {
 showBiometric:boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goPayment(){
    this.router.navigate(['/screenthree']);
  }


}
