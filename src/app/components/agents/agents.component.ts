import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  playableAgents: any = [];
  isLoading: boolean = false


  constructor(private _ApiService: ApiService) { }

  ngOnInit(): void {
    this.FetchAllAgents();
  }


  FetchAllAgents() {
    this.isLoading = true
    this._ApiService.FetchAllAgents().subscribe({
      next: res => {

        this.playableAgents = res.data.filter((agent: any) => agent.isPlayableCharacter)

        console.log(this.playableAgents);
        this.isLoading = false

      },

      error: err => {
        console.log(err);
        this.isLoading = false
      }
    })
  }
}
