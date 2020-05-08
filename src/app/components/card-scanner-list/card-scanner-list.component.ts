import { Component, OnInit } from '@angular/core';
import { CardScannerService } from 'src/app/services/card-scanner.service';

@Component({
  selector: 'app-card-scanner-list',
  templateUrl: './card-scanner-list.component.html',
  styleUrls: ['./card-scanner-list.component.css']
})
export class CardScannerListComponent implements OnInit {

  CardScanner: any;
  currentCardScanner = null;
  currentIndex = -1;
  title = '';

  constructor(private cardScannerService: CardScannerService) { }

  ngOnInit(): void {
    this.retrieveCardScanner();
  }

  retrieveCardScanner() {
    this.cardScannerService.getAll()
      .subscribe(
        data => {
          this.CardScanner = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveCardScanner();
    this.currentCardScanner = null;
    this.currentIndex = -1;
  }

  setActiveCardScanner(CardScanner, index) {
    this.currentCardScanner = CardScanner;
    this.currentIndex = index;
  }

  removeAllCardScanner() {
    this.cardScannerService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCardScanner();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle() {
    this.cardScannerService.findByTitle(this.title)
      .subscribe(
        data => {
          this.CardScanner = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
