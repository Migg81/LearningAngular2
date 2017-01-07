import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { Iproduct } from './product';


@Component({
    templateUrl:"app/products/product-detail.component.html"
})
export class ProductDetailComponent implements OnInit{
    pageTitle:string="Product Detail";
    product:Iproduct; 

    constructor(private route:ActivatedRoute, private router:Router ){
        console.log( this.route.snapshot.params["id"]);
    }

    ngOnInit (): void{
        let id=this.route.snapshot.params["id"];
        this.pageTitle+=` : ${id}`;
    }

    onBack():void{
        this.router.navigate(['/products']);
    }

}