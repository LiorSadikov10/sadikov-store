import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productsList : any;

  constructor(private api: ApiService, private CartService: CartService) { }

  totalLength:any;
  page:number = 1;

  ngOnInit(): void {
    this.api.getProducts().subscribe(res=>{
      this.productsList = res;
      this.totalLength = res.length;
      this.productsList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    })
  }
  addToCart(item:any){
    this.CartService.addToCart(item);
  }
}
