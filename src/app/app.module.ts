import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannertopComponent } from './bannertop/bannertop.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { LogoComponent } from './logo/logo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BannertopComponent,
    ContactmeComponent,
    LogoComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
