import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
faceSnaps!: FaceSnap[];
mySnap!: FaceSnap;
myOtherSnap!: FaceSnap;
myLastSnap!: FaceSnap;


// initialisation des faceSnaps comme objets avec les champs / propriétés requises
  ngOnInit(){
   // this.mySnap = new FaceSnap( inutilisable sans constructeur
    this.mySnap = {
    title:  'Archibald',
    description:  'Mon meilleur ami depuis tout petit !',
    imageUrl:  'https://images.pexels.com/photos/19145595/pexels-photo-19145595/free-photo-of-route-rue-animal-chien.jpeg',
    createdDate:  new Date(),
    snaps:  0,
    location: 'Paris'
    };

    this.myOtherSnap = {
      title: 'Three Rock Moutain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      createdDate: new Date(),
      snaps: 0,
      location: 'La montagne'
    };


    this.myLastSnap = {
      title:  'Un bon repas',
      description:  'Mmh que c\'est bon',
      imageUrl:  'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      createdDate:  new Date(),
      snaps:  0
    }
   
    ;

  }
}
