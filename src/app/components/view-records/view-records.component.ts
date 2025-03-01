import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-view-records',
  templateUrl: './view-records.component.html',
  styleUrls: ['./view-records.component.css']
})
export class ViewRecordsComponent implements OnInit {
  criminals: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCriminals().subscribe((data) => {
      this.criminals = data;
    });
  }
}
