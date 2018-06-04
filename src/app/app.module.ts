import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// COMPONENTS //
import { AppComponent } from './app.component';

// SERVICES //
import { SessionService } from './services/session.service';
import { LoginSigninComponent } from './login-signin/login-signin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
