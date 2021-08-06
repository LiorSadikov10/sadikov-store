import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public product : any = [];
  public grandTotal !:number;
  public totalItem : number = 0;

  constructor(private cartService:  CartService) { }
  

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.cartService.getProducts().subscribe(res=>{
        this.totalItem = res.length;
      })
    })
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}