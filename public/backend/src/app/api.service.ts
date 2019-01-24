import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DashboardModel} from "./model/dashboard.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private httpClient: HttpClient;

    private dashboardUrl: string = 'http://paula.dev.local/';
    private themeUrl: string = 'http://paula.dev.local/theme/';

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public getDashboard() {
        return this.httpClient.get(this.dashboardUrl);
    }

    public getThemes() {
        return this.httpClient.get(this.themeUrl);
    }
}
