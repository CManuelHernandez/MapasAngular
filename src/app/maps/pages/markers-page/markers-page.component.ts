import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
})
export class MarkersPageComponent {
  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(
    -3.703288185161739,
    40.41714755304062
  );

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    //const markerHtml = document.createElement('div');
    //markerHtml.innerHTML = 'Pointer';
    //
    //const marker = new Marker({
    //  // color: 'red',
    //  element: markerHtml,
    //})
    //  .setLngLat(this.currentLngLat)
    //  .addTo(this.map);

    const marker = new Marker().setLngLat(this.currentLngLat).addTo(this.map);
  }

  createMarker() {}
}
