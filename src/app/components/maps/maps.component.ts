import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-maps',

  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  isLoading: boolean = false
  maps: any = [];

  constructor(private _ApiService: ApiService) { }
  ngOnInit(): void {
    this.FetchAllMaps();
  }

  FetchAllMaps() {
    this.isLoading = true

    this._ApiService.FetchAllMaps().subscribe({
      next: res => {
        this.maps = res.data
        console.log(this.maps);
        this.isLoading = false

      },

      error: err => {
        console.log(err);
        this.isLoading = false

      }
    })
  }
}
