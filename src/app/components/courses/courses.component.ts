import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
selectedFile!: File;
  constructor() { }

  ngOnInit(): void {
  }
 onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
