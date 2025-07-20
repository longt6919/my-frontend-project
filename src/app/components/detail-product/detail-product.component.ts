import {ViewChild,ElementRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Danh sách ảnh thumbnails
  thumbnails: string[] = [
    'https://theme.hstatic.net/200000000133/1001205759/14/home_category_1_img.jpg?v=2074',
    'https://nld.mediacdn.vn/2020/1/19/fo171641-15794385300701052331452.jpg',
    'https://img5.thuthuatphanmem.vn/uploads/2021/11/24/hinh-anh-nguoi-mau-ao-dai_092457554.jpg',
    'https://lamia.com.vn/storage/ao-dai-cach-tan-lamia.jpg',
    'https://blogcdn.muaban.net/wp-content/uploads/2022/12/19015313/ao-dai-tet-2.jpg',
  ];
  //ảnh chính hiển thị
  selectedImage: string = this.thumbnails[0];
   @ViewChild('thumbnailContainer', { static: false })
  thumbnailContainer!: ElementRef<HTMLDivElement>;

  changeMainImage(thumb: string): void {
    this.selectedImage = thumb;
  }
  scrollThumbnails(direction: 'left' | 'right'): void {
    const scrollAmount = 100;
    const container = this.thumbnailContainer.nativeElement;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  }
}
