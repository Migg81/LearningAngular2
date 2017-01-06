import {Injectable} from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Iproduct } from './product';

@Injectable()
export class ProductService{

    private producturl:string='api/products/products.json'
    constructor(private _http: Http){};   

    getProduct():Observable<Iproduct[]>{
        return this._http.get(this.producturl)
            .map((r:Response)=><Iproduct[]>r.json())
            .do(data => console.log('All : '+ JSON.stringify(data)))
            .catch(this.handleError);   
    }

    private handleError(error:Response){
        return Observable.throw(error.json().error || "Server Error");
    }
}