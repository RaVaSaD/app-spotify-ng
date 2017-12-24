import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  id: string;
  artista: any = { };
  pistas: any[] = [];

  constructor( private activatedRoute: ActivatedRoute,
                public _spoty: SpotifyService ) { }

  ngOnInit() {
    this.activatedRoute.params
        .map( params => params['id'])
        .subscribe( id => {
          this.id = id;
          console.log(this.id);

          this._spoty.getArtista(id)
            .subscribe( artista => {
              console.log(artista);
              this.artista = artista;
            });

          this._spoty.getTop(this.id)
            .map( (resp: any) => resp.tracks)
            .subscribe(pistas => {
              console.log(pistas);
              this.pistas = pistas;
            });

        });

  }

  obtenerArtista(_id: string) {
    this._spoty.getArtista(_id).subscribe(artista => {
      console.log('Artista listo');
      console.log(artista);
      this.artista = artista;
    });
  }

}

// El map sirve para transformar la respuesta, en este caso el params, y se pasa al subscribe el id únicamente.
// Aunque no hace falta utilizarlo, es recomendable, otra forma es:
/*

this.activatedRoute.params
  .subscribe( params => {
    this.id = params['id'];
    console.log(this.id);
  });

*/
