import { Component, OnInit } from '@angular/core';
import { CardScannerService } from 'src/app/services/card-scanner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-scanner-details',
  templateUrl: './card-scanner-details.component.html',
  styleUrls: ['./card-scanner-details.component.css']
})
export class CardScannerDetailsComponent implements OnInit {

  currentCardScanner = null;
  message = '';

  constructor(private cardScannerService: CardScannerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCardScanner(this.route.snapshot.paramMap.get('id'));
  }

  getCardScanner(id) {
    this.cardScannerService.get(id)
      .subscribe(
        data => {
          this.currentCardScanner = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCardScanner() {
    this.cardScannerService.update(this.currentCardScanner.id, this.currentCardScanner)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The Scan Card was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCardScanner() {
    this.cardScannerService.delete(this.currentCardScanner.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/CardScanner']);
        },
        error => {
          console.log(error);
        });
  }

}
