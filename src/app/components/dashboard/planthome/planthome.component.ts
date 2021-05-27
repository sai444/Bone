import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-planthome',
  templateUrl: './planthome.component.html',
  styleUrls: ['./planthome.component.scss']
})
export class PlanthomeComponent  implements OnInit{
  options1: string[] = ["SKF BNG"];
  options: string[] = [ "SGB CH5","SPC (IR) CH5", "SPC (OR) CH5"];
  constructor(private http: HttpClient) { }

  layersControl = {
    baseLayers: {
      'Open Street Map': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {
      'Big Circle': L.circle([46.95, -122], { radius: 5000 }),
      'Big Square': L.polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
    }
  };
  selectedQuantity = 'SKF BNG';
  onOptionsSelected(selectedQuantity){
  }
  //Second map


  //Third map
  map: L.Map;
  json;

  onMapReady(map: L.Map) {
    this.http.get("assets/data/map/polygon.json").subscribe((json: any) => {
      this.json = json;
      L.geoJSON(this.json).addTo(map);
    });
  }

  //Forth map
  map4;
  homeCoords = {
    lat: 12.810331,
    lon: 77.412521
  };

  popupText = "SKF BNG";
  popupTexts = "SKF sai";

  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: "assets/images/marker-icon.png",
      shadowUrl: "assets/images/marker-shadow.png"
    })
  };

  options4 = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution: ""
      })
    ],
    zoom: 5,
    center: L.latLng(this.homeCoords.lat, this.homeCoords.lon)
  };

  initMarkers() {
    const popupInfo = `<b style="color: red; background-color: white">${
      this.popupText
      }</b>`;
    L.marker([this.homeCoords.lat, this.homeCoords.lon], this.markerIcon)
      .addTo(this.map4)
      .bindPopup(popupInfo);
  }
  initMarkers2() {
    const popupInfo = `<b style="color: red; background-color: white">${
      'SKF PUNE'
      }</b>`;
    L.marker([18.62856891619755, 73.83311535044136], this.markerIcon)
      .addTo(this.map4)
      .bindPopup(popupInfo);
  }


  onMapReady4(map: L.Map) {
    this.map4 = map;
    this.initMarkers();
    this.initMarkers2();
  }

  ngOnInit() { }

}
