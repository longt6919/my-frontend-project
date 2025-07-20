import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/products.json').subscribe((data) => {
      this.products = data;
    });
  }
  

}
