import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-gears',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.css']
})
export class GearsComponent implements OnInit {
  gears: any = [];
  isLoading: boolean = false

  constructor(private _ApiService: ApiService) { }

  ngOnInit(): void {
    this.FetchAllGears();
  }

  FetchAllGears() {
    this.isLoading = true

    this._ApiService.FetchAllGears().subscribe({
      next: res => {
        this.gears = res.data
        console.log(this.gears);
        this.isLoading = false

      },

      error: err => {
        console.log(err);
        this.isLoading = false

      }
    })
  }
}
