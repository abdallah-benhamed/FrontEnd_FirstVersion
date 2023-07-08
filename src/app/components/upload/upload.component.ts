import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
selectedFile!: File;
  constructor() { }

  ngOnInit(): void {
  }
 onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
