import { Component, OnInit, } from '@angular/core';

interface Order {
  id: number;
  date: string;
  status: string;
  total: number;
}
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  orders:Order[] = [
    { id: 101, date: '2024-07-01', status: 'Đã giao', total: 1200000 },
    { id: 102, date: '2024-06-28', status: 'Đang giao', total: 900000 },
    { id: 103, date: '2024-06-20', status: 'Đã hủy', total: 150000 },
    { id: 104, date: '2024-06-15', status: 'Đã giao', total: 780000 },
    { id: 105, date: '2024-06-10', status: 'Chờ xử lý', total: 640000 },
    { id: 106, date: '2024-06-05', status: 'Đã giao', total: 2300000 },
    { id: 107, date: '2024-06-01', status: 'Đã giao', total: 320000 },
    { id: 108, date: '2024-05-28', status: 'Đã giao', total: 450000 },
    { id: 109, date: '2024-05-20', status: 'Chờ xử lý', total: 1230000 },
    { id: 110, date: '2024-05-15', status: 'Đã giao', total: 980000 },
    { id: 111, date: '2024-05-10', status: 'Đang giao', total: 880000 }
  ];
  
  paginatedOrders:Order[] = [];


  ngOnInit(): void {
    // Gán toàn bộ orders cho paginatedOrders để hiển thị
    this.paginatedOrders = [...this.orders];
  }


  

}
