import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, GiphyResponse } from '../interfaces/giphy.interface';


@Injectable({
    providedIn: 'root'
})
export class GifsService {
    private apiURL: string = "https://api.giphy.com/v1/gifs";
    private apiKey: string = "DC0FmeItuVojAi6W0B4bItYB3DKqbZ9J";
    private _historial: string[] = [];
    public resultados: Data[] = [];

    constructor(
        private http: HttpClient
    ) {
        if(localStorage.getItem("historial")) {
            this._historial = JSON.parse(localStorage.getItem("historial")!);
        }
        if(localStorage.getItem("resultados")) {
            this.resultados = JSON.parse(localStorage.getItem("resultados")!);
        }
    }

    get historial(): string[] {
        return [...this._historial];
    }

    buscarGifs( query: string ): void {
        if(query && query.length > 0) {
            if(!this._historial.includes( query )) {
                this._historial.unshift( query );
                this._historial = this._historial.splice(0,20);

                localStorage.setItem("historial", JSON.stringify(this._historial));
            }

            this.ejecutaBusqueda( query );
        }
    }

    ejecutaBusqueda( query: string ): void {
        const params: HttpParams = new HttpParams()
            .set("api_key", this.apiKey)
            .set("q", query)
            .set("limit", 10)
            .set("lang", "es");

        this.http.get<GiphyResponse>(`${this.apiURL}/search`, {params})
            .subscribe((resp: GiphyResponse) => {
                this.resultados = resp.data;
                localStorage.setItem("resultados", JSON.stringify(this.resultados));
            });
    }

}
