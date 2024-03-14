import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.css']
})

export class AgentDetailsComponent implements OnInit {
  agentId: string = ""
  agentDetails: any
  isLoading: boolean = false

  constructor(private _ApiService: ApiService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true
    this._ActivatedRoute.params.subscribe(param => {
      this.agentId = param['id']
    })

    this._ApiService.FetchAgent(this.agentId).subscribe({
      next: response => {
        this.agentDetails = response.data
        console.log(this.agentDetails);
        this.isLoading = false

      },
      error: err => {
        console.log(err);
        this.isLoading = false

      }
    })
  }

}
