import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap; // décorateur Input() pour importer depuis l'extérieur
  // title!: string;
  // description!: string;
  // createdDate!: Date;
  // snaps!: number;
  // imageUrl!: string;
  buttonText!: string;

  ngOnInit(){
    // this.title = 'Archibald';
    // this.description = 'Mon meilleur ami depuis tout petit !';
    // this.createdDate = new Date();
    // this.snaps = 6;
    // this.imageUrl = 'https://images.pexels.com/photos/19145595/pexels-photo-19145595/free-photo-of-route-rue-animal-chien.jpeg';
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }

}


