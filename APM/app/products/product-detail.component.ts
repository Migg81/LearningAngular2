import { Component } from '@angular/core';
import { Iproduct } from './product';

@Component({
    templateUrl:"app/products/product-detail.component.html";
})
export class ProductDetailComponent{
    pageTitle:string="Product Detail";
    product:Iproduct; 
}