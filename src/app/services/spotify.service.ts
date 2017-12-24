import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  artista: any;

  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQCv0B0LACL17Y1Ce8zeRAPkfi1GPYD6CjGsTlyVXb4ILDO_mH5B3UtrCB978HRFGHSOX9Q2MuvhAG-GNtE';

  constructor(public http: HttpClient) {
    console.log ('Se inicia el servicio SpotifyService');

  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getArtistas(termino: string) {

    let url = `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, {headers: headers})
              .map( (resp: any) => {
                this.artistas = resp.artists.items;
                return this.artistas;
              });

  }

  getArtista(id: string) {

    let url = `${ this.urlSpotify }artists/${ id }`;

    let headers = this.getHeaders();

    return this.http.get(url, {headers: headers})
              .map( (resp: any) => {
                this.artista = resp;
                return this.artista;
              });

  }

  getTop(id: string){
    let url = `${ this.urlSpotify }artists/${ id }/top-tracks?country=ES`;

    let headers = this.getHeaders();

    return this.http.get(url, {headers: headers});
  }

}
