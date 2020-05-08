import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardScannerListComponent } from './components/card-scanner-list/card-scanner-list.component';
import { CardScannerDetailsComponent } from './components/card-scanner-details/card-scanner-details.component';
import { AddCardScannerComponent } from './components/add-card-scanner/add-card-scanner.component';


const routes: Routes = [
  { path: '', redirectTo: 'CardScanner', pathMatch: 'full' },
  { path: 'CardScanner', component: CardScannerListComponent },
  { path: 'CardScanner/:id', component: CardScannerDetailsComponent },
  { path: 'add', component: AddCardScannerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
