import { Injectable } from '@angular/core';
import { TripDate } from 'src/app/mocks/interfaces/trip-date';
import { mockTrip } from 'src/app/mocks/models/trip-info';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection, getDoc, addDoc, doc, deleteDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTripService {

  tripsList: TripDate[] = mockTrip;

  constructor(public firestore: Firestore) { }

  getTripsList() {
    const itemCollection = collection(this.firestore, 'trips');
    return collectionData(itemCollection, {idField: 'id'}) as Observable<any[]>;;
  }

  setTripsList(trip: TripDate) {
    // this.tripsList.push(trip);
    // console.log('passing new data');
    const itemCollection = collection(this.firestore, 'trips');
    return addDoc(itemCollection, trip);
  }

  deleteTrip(trip: TripDate) {
    // console.log(trip);
    const itemCollectionDoc = doc(this.firestore, `trips/${trip.id}`);
    return deleteDoc(itemCollectionDoc);
  }
  
}
