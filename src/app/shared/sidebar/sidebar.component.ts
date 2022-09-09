import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    get historial(): string[] {
        return this.GifsSvc.historial;
    }

    constructor(
        private GifsSvc: GifsService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    buscar(query: string): void {
        this.GifsSvc.ejecutaBusqueda(query);
    }

}
