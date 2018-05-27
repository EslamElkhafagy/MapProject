import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  // zoom level 
  zoom: number = 8;
  title: string = 'My first AGM project';
  // start level 
  lat: number = 24.7990126;
  lng: number = 120.9793394;
// array 

loc:string[]=["24.799448","120.979021","24.779448","120.979021","24.799448","120.879021"]


// markers 
markers: marker[] = [
    {
        lat: 24.7990126,
        lng: 120.9793394,
        label: 'All',
        iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
        draggable: true,
        linkprofile:"https://ask.fm/eslamelkhafagy"
    },
    {
        lat: 24.794806,
        lng: 120.9725426,
        label: 'All',
        iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
        draggable: false,
        linkprofile:"https://ask.fm/eslamelkhafagy"
    },
    {
        lat: 24.794806,
        lng: 120.9725426,
        label: 'All',
        iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
        draggable: true,
        linkprofile:"https://ask.fm/eslamelkhafagy"
    },
    {
        lat: 24.7946819,
        lng: 120.9726749,
        label: 'All',
        iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
        draggable: true,
        linkprofile:"https://ask.fm/eslamelkhafagy"
    },
    {
        lat: 24.7946819,
        lng: 120.9726749,
        label: 'All',
        iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
        draggable: true,
        linkprofile:"https://ask.fm/eslamelkhafagy"
    },
    {
        lat: 24.7894109,
        lng: 120.9747798,
        label: 'All',
        iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
        draggable: true,
        linkprofile:"https://ask.fm/eslamelkhafagy"
    }
]
// dir = undefined;
dir ={
    origin:{ lat: 24.799448, lng: 120.979021 },
    destination: { lat: 24.799524, lng: 120.975017 }
  }


dir2 ={
    origin:{ lat: 24.799448, lng: 120.979021 },
    destination: { lat: 24.789524, lng: 120.975017 }
  }

  // public getDirection() {
//     this.dir = {
//       origin:{ lat: 24.799448, lng: 120.979021 },
//       destination: { lat: 24.799524, lng: 120.975017 }
//     }
//   }

public placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.lat=$event.coords.lat;
    this.lng=$event.coords.lng;

}


public getAllTasks(){
    this. markers = [
        {
            lat: 24.7990126,
            lng: 120.9793394,
            label: 'All',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: true,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        },
        {
            lat: 24.794806,
            lng: 120.9725426,
            label: 'All',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: false,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        },
        {
            lat: 24.794806,
            lng: 120.9725426,
            label: 'All',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: true,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        },
        {
            lat: 24.7946819,
            lng: 120.9726749,
            label: 'All',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: true,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        }
      ]
      


}

public getFinishedTasks(){

   this. markers = [
        {
            lat: 51.673858,
            lng: 7.815982,
            label: 'finished',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: true,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        },
        {
            lat: 51.673858,
            lng: 7.715982,
            label: 'finished',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: false,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        },
        
        {
            lat: 51.673858,
            lng: 7.725982,
            label: 'finished',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: false,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        },
        {
            lat: 51.623858,
            lng: 7.895982,
            label: 'finished',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: true,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'finished',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: true,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        }
      ]
      

}

public getNextTasks(){
    this. markers = [
        {
            lat: 51.673858,
            lng: 7.815982,
            label: 'Next',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: true,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        },
        {
            lat: 51.673858,
            lng: 7.715982,
            label: 'Next',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: false,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        },
        
        {
            lat: 51.673858,
            lng: 7.725982,
            label: 'Next',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: false,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        },
        {
            lat: 51.623858,
            lng: 7.895982,
            label: 'Next',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: true,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'Next',
            iconUrl:"https://cdn0.iconfinder.com/data/icons/industrial-icons/164/2-128.png",
            draggable: true,
            linkprofile:"https://ask.fm/eslamelkhafagy"
        }
      ]


}


}// end calss AppComponent
// just an interface for type safety.
interface marker {
lat: number;
lng: number;
label?: string;
draggable: boolean;
iconUrl:string;
linkprofile:string;// not defind until now 
}
