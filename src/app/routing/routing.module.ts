import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ContactComponent } from '../contact/contact.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ContentComponent } from '../content/content.component';
//localhost:4200/signin/nested2
const routes=[
//  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about/:code',component:AboutComponent},
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'contact',component:ContactComponent}
  //,{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    
    AboutComponent,
    
    SignInComponent,
    
    SignUpComponent,

    ContactComponent,

    PageNotFoundComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
