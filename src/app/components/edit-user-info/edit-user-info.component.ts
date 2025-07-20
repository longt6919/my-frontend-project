import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.scss']
})
export class EditUserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() close = new EventEmitter<void>();

}
