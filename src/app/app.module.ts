import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ScreenOneComponent } from './screen-one/screen-one.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';
import { ScreenThreeComponent } from './screen-three/screen-three.component';
import { ScreenFourComponent } from './screen-four/screen-four.component';

const ROUTES = [
{
  path:'',
  redirectTo: '/screenone',
  pathMatch: 'full'
},
{
  path: 'screenone',
  component: ScreenOneComponent
},
{
  path: 'screentwo',
  component: ScreenTwoComponent
},
{
  path:'screenthree',
  component: ScreenThreeComponent
},
{
  path:'screenfour',
  component: ScreenFourComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    ScreenOneComponent,
    ScreenTwoComponent,
    ScreenThreeComponent,
    ScreenFourComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
