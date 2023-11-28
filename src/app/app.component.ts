import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core'; // pour mettre la date en fr ajout de LOCALE_ID, Inject
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.models';
import {registerLocaleData} from '@angular/common'; // pour mettre la date en fr
import * as fr from '@angular/common/locales/fr'; // pour mettre la date en fr
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(@Inject(LOCALE_ID) private locale: string) { // pour mettre la date en fr
    registerLocaleData(fr.default, locale);
  }

faceSnaps!: FaceSnap[];
// mySnap!: FaceSnap;
// myOtherSnap!: FaceSnap;
// myLastSnap!: FaceSnap;


// initialisation des faceSnaps comme objets avec les champs / propriétés requises
  ngOnInit(){
  //  // this.mySnap = new FaceSnap( inutilisable sans constructeur
  //   this.mySnap = {
  //   title:  'Archibald',
  //   description:  'Mon meilleur ami depuis tout petit !',
  //   imageUrl:  'https://images.pexels.com/photos/19145595/pexels-photo-19145595/free-photo-of-route-rue-animal-chien.jpeg',
  //   createdDate:  new Date(),
  //   snaps:  0,
  //   location: 'Paris'
  //   };

  //   this.myOtherSnap = {
  //     title: 'Three Rock Moutain',
  //     description: 'Un endroit magnifique pour les randonnées.',
  //     imageUrl: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     createdDate: new Date(),
  //     snaps: 0,
  //     location: 'La montagne'
  //   };


  //   this.myLastSnap = {
  //     title:  'Un bon repas',
  //     description:  'Mmh que c\'est bon',
  //     imageUrl:  'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     createdDate:  new Date(),
  //     snaps:  0
  //   }
   
// au lieu d'avoir une variable pour chaque élément à afficher on créé un tableau d'objets appelé faceSnaps
this.faceSnaps = [
  {
    title:  'Archibald',
    description:  'Mon meilleur ami depuis tout petit !',
    imageUrl:  'https://images.pexels.com/photos/19145595/pexels-photo-19145595/free-photo-of-route-rue-animal-chien.jpeg',
    createdDate:  new Date(),
    snaps:  150,
    location: 'Paris'
    },

    {
      title: 'Three Rock Moutain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      createdDate: new Date(),
      snaps: 0,
      location: 'La montagne'
    },
    {
      title:  'Un bon repas',
      description:  'Mmh que c\'est bon',
      imageUrl:  'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      createdDate:  new Date(),
      snaps:  0
    }

]

    ;

  }
}
