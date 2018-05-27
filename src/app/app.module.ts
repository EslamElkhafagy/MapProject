import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
//cluster 
// install 
 // npm install js-marker-clusterer @agm/js-marker-clusterer --save
 // imports 
 import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
 //  direction
 // install 
 // npm install --save agm-direction
 //imports 
 import { AgmDirectionModule } from 'agm-direction';   // agm-direction 
 import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window'; // for snazzy window 
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    // cluster 
    AgmJsMarkerClustererModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCI4lktlvTVueD1cg34DsnLaN1xh8_9EFQ'
    }),
   AgmDirectionModule,      // agm-direction
   AgmSnazzyInfoWindowModule // for snazzy window 

  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}