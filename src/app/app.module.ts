import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileCardComponent } from './shared/components/mobile-card/mobile-card.component';
import { MobileDashboardComponent } from './shared/components/mobile-dashboard/mobile-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileCardComponent,
    MobileDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
