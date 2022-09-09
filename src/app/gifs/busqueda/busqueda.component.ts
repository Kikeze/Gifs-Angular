import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
    @ViewChild("txtBuscar") txtBuscar!: ElementRef<HTMLInputElement>;

    constructor(
        private GifsSvc: GifsService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    buscar() {
        const value = this.txtBuscar.nativeElement.value;

        this.GifsSvc.buscarGifs( value.trim() );

        this.txtBuscar.nativeElement.value = "";
    }

}
