// réunion sous forme de classe pour pouvoir générer des objets face-snap

export class FaceSnap {
   title!: string;
   description!: string;
   imageUrl!: string;
   createdDate!: Date;
   snaps!: number;
   location?: string; // propriété optionnelle
}

// on peut utiliser cette classe comme type


// ajout du modificateur public devant chaque propriété
// public dit à typescript que la classe face-snap aura des propriétés qu'on pourra passer comme argument au constructeur
// création du type personnalisé sous forme de classe ici appelée face-snap
// passage possible de app-component  à face-snap component (injection depuis le component parent)


// faire en sorte que  AppComponent  centralise les données de plusieurs FaceSnaps,
// génère une instance du component pour chaque FaceSnap, et injecte ce FaceSnap 
// à cette instance.