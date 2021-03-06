import { Component, OnInit} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino = '';
  artista: any;

  constructor( public _spotify: SpotifyService ) {  }

  ngOnInit() {
  }

  buscarArtista() {

    if ( this.termino.length === 0) {
      return;
    }else {

    }

    this._spotify.getArtistas(this.termino)
      .subscribe();
  }


}
