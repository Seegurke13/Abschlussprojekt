import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DashboardModel} from "./model/dashboard.model";
import {ThemeModel} from "./model/theme.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private httpClient: HttpClient;

    private dashboardUrl: string = 'http://paula.dev.local/';
    private themeUrl: string = 'http://paula.dev.local/theme';
    private presetUrl: string = 'http://paula.dev.local/preset';

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public getDashboard() {
        return this.httpClient.get(this.dashboardUrl);
    }

    public getThemes() {
        return this.httpClient.get(this.themeUrl);
    }

    public createTheme(theme: ThemeModel) {
      return this.httpClient.post(this.themeUrl + '/new', theme)
    }

    public saveTheme(theme: ThemeModel) {
      return this.httpClient.put(this.themeUrl + '/' + theme.id + '/edit', theme);
    }

    public getPresets() {
        return this.httpClient.get(this.presetUrl);
    }

    public getTheme(id: number) {
        return this.httpClient.get(this.themeUrl + '/' + id);
    }
}
