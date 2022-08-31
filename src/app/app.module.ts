import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProtectedComponent } from './components/pages/protected/protected.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-x9iff0ot.us.auth0.com',
      clientId: 'Q48MziPeggnpmnsr9UZOnxaESG1mXQGO'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
