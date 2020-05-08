import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCardScannerComponent } from './components/add-card-scanner/add-card-scanner.component';
import { CardScannerDetailsComponent } from './components/card-scanner-details/card-scanner-details.component';
import { CardScannerListComponent } from './components/card-scanner-list/card-scanner-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddCardScannerComponent,
    CardScannerDetailsComponent,
    CardScannerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
