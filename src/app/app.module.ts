import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FetchCodePipe } from './fetch-code.pipe';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { TryComponent } from './try/try.component';



@NgModule({
  declarations: [
    HomeComponent,
    
    AppComponent,
    
    FooterComponent,
    
    ContentComponent,
    
    NavbarComponent,
    
    FetchCodePipe,
    
    TryComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
