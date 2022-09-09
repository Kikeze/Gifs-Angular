import { Component, OnInit } from '@angular/core';
import { Data, GiphyResponse } from '../interfaces/giphy.interface';
import { GifsService } from '../services/gifs.service';


@Component({
    selector: 'app-resultados',
    templateUrl: './resultados.component.html',
    styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
    get resultados(): Data[] {
        return this.GifsSvc.resultados;
    }

    constructor(
        private GifsSvc: GifsService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

}
