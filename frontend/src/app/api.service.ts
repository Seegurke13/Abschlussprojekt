import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DashboardModel} from "./model/dashboard.model";
import {ThemeModel} from "./model/theme.model";
import {PresetModel} from "./model/preset.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private httpClient: HttpClient;

    private HOST = 'http://localhost/api';

    private dashboardUrl: string = this.HOST + '/';
    private themeUrl: string = this.HOST + '/theme';
    private presetUrl: string = this.HOST + '/preset';

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
      return this.httpClient.post(this.themeUrl + '/new', theme);
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

    public savePreset(preset: PresetModel) {
        return this.httpClient.post(this.presetUrl + '/' + preset.id, preset);
    }

    public createPreset(preset: PresetModel) {
        return this.httpClient.put(this.presetUrl + '/new', preset);
    }

    public removePreset(id: number) {
        return this.httpClient.delete(this.presetUrl + '/' + id + '/delete');
    }
}
