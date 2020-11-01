import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/toPromise'

import { Oferta } from './shared/oferta.model'


@Injectable()
export class OfertasService {
    constructor(private http: Http) { }

    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição http
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta.json())

        //retornar uma promise Oferta
    }
}
