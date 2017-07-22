import { peopleReducer, detailsReducer } from './people.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { PersonListComponent } from './person-list/person-list.component';
import { StoreModule } from "@ngrx/store";
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { filterReducer } from "app/filters.reducer";

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent,
    FilterSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ people: peopleReducer, filters:filterReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
