import {Component, OnInit} from '@angular/core';
import {DashboardModel} from "../model/dashboard.model";
import {ApiService} from "../api.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public themes: DashboardModel[];
    private apiService: ApiService;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
        this.apiService.getDashboard().subscribe((data: DashboardModel[]) => this.themes = data);
    }

    ngOnInit() {
    }
}
