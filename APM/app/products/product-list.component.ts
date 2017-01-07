import { Component } from '@angular/core';
import { Iproduct} from './product';
import { OnInit } from '@angular/core';
import { ProductService} from './product.service';

@Component({
    moduleId:module.id,
    templateUrl:'products-list.component.html',
    styleUrls:["product-list.component.css"]
})
export class ProductListComponent implements OnInit {
    pageTitle: string ="Testing Angulat App with typeScript";
    imgWidth: number=50;
    imgMargine: number=2;
    showImage: boolean=false;
    listfilter: string="cart";
    errorMsg:string;

    products: Iproduct[] ;
    
    constructor(private _productService:ProductService){}
    
    toggleImage():void{
        this.showImage= !this.showImage;
    }

    ngOnInit():void{
        this._productService.getProduct().subscribe(p=>this.products=p,error=>this.errorMsg=<any>error);
    }

    onratingClicked( message:string):void {
        this.pageTitle="Product List :" + message;
    }
}