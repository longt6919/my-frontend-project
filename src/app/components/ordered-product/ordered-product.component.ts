import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ordered-product',
  templateUrl: './ordered-product.component.html',
  styleUrls: ['./ordered-product.component.scss']
})
export class OrderedProductComponent implements OnInit {
  
  constructor() { }

  ngOnInit(){
  }
  products:any = [
    {
      name: 'PH Monitor',
      description: 'HP offers monitors with high refresh rates.',
      quantity: 1,
      unitCost: 180
    },
    {
      name: 'Mobile',
      description: 'DisplayPort, USB-C, and sometimes.',
      quantity: 5,
      unitCost: 550
    },
    {
      name: 'Keyboard',
      description: 'Factory calibration included.',
      quantity: 2,
      unitCost: 80
    },
    {
      name: 'Mouse Master',
      description: 'Balanced performance and design.',
      quantity: 3,
      unitCost: 300
    },
    {
      name: 'iMac',
      description: 'Eco-friendly, low power consumption.',
      quantity: 5,
      unitCost: 1520
    }
  ];
    get totalPrice(): number {
  return this.products.reduce((sum: number, p: any) => sum + (p.quantity * p.unitCost), 0);
}

}
