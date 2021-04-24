import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photoshow',
  templateUrl: './photoshow.component.html',
  styleUrls: ['./photoshow.component.css']
})
export class PhotoshowComponent implements OnInit {
  photoUrl: string;

  constructor(private photoservice: PhotosService) {
    this.fetchphoto();
  }

  ngOnInit(): void {
  }

  Onclick() {
    this.fetchphoto();
    }

    fetchphoto() {
      this.photoservice.getphoto().subscribe( (dim) => {
        this.photoUrl = dim.urls.full;
      });
    }

  }

