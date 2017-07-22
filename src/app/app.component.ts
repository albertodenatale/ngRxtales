import { ADD_GUEST, REMOVE_GUEST, REMOVE_PERSON, TOGGLE_ATTENDING, ADD_PERSON } from './actions';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private subscription: Subscription;

  public model;

  constructor(private store: Store<any>) {

    this.model = Observable.combineLatest(
      this.store.select("people"),
      this.store.select("filters"),
      (people, filters) => {
        return {
          people: people.filter(filters)
        }
      }
    )
  }

  addPerson(name) {
    this.store.dispatch(
      {
        type: ADD_PERSON, payload: { id: Math.floor(Math.random() * 1000), name }
      }
    )
  }

  addGuest(id) {
    this.store.dispatch({ type: ADD_GUEST, payload: id });
  }

  removeGuest(id) {
    this.store.dispatch({ type: REMOVE_GUEST, payload: id });
  }

  removePerson(id) {
    this.store.dispatch({ type: REMOVE_PERSON, payload: id });
  }

  toggleAttending(id) {
    this.store.dispatch({ type: TOGGLE_ATTENDING, payload: id })
  }

  updateFilter(type) {
    this.store.dispatch({ type: type })
  }
}
