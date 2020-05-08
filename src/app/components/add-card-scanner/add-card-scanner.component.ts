import { Component, OnInit } from '@angular/core';
import { CardScannerService } from 'src/app/services/card-scanner.service';

@Component({
  selector: 'app-add-card-scanner',
  templateUrl: './add-card-scanner.component.html',
  styleUrls: ['./add-card-scanner.component.css']
})
export class AddCardScannerComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  image;
  message = '';
  CardScanner = {
    title: '',
    path_image:''
  };

  submitted = false;

  constructor(private cardScannerService: CardScannerService) { }

  ngOnInit(): void {
  }

  selectFile(event) {
    let fileItem = event.target.files.item(0);
    let fileNameArr = fileItem.name.split('.');
    if(fileNameArr[1] == 'jpg' || fileNameArr[1] == 'JPG' || fileNameArr[1] == 'jpeg' || fileNameArr[1] == 'png' || fileNameArr[1] == 'PNG'){

      this.message = '';
      this.selectedFiles = fileItem;

      if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onload = (event: any) => {
            console.log(event.target.result);
            this.image = (event.target.result);
          }
      }
    
    }else{
      this.message = 'Scan image should be in jpg or png format';
      this.selectedFiles = null;
    }
  }

  saveCardScanner() {
    let formData: FormData = new FormData();
    this.progress = 0;
    if(this.image)
    formData.append('image', this.image);
    const data = {
      title: this.CardScanner.title,
      image: this.image
    };
    for(let key in data){
      formData.append(key, data[key]);
    }

    this.cardScannerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCardScanner() {
    this.submitted = false;
    this.CardScanner = {
      title: '',
      path_image:''
    };
  }
}
