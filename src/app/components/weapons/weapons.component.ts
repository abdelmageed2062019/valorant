import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {
  weapons: any = [];
  isLoading: boolean = false


  constructor(private _ApiService: ApiService) { }

  ngOnInit(): void {
    this.FetchAllWeapons();
  }


  FetchAllWeapons() {
    this.isLoading = true

    this._ApiService.FetchAllWeapons().subscribe({
      next: res => {
        this.weapons = res.data
        console.log(this.weapons);
        this.isLoading = false

      },

      error: err => {
        console.log(err);
        this.isLoading = false

      }
    })
  }
}
