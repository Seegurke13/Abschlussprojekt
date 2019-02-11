import {Component, OnInit} from '@angular/core';
import {ThemeModel} from "../model/theme.model";
import {ApiService} from "../api.service";
import {PresetModel} from "../model/preset.model";
import {DashboardModel} from "../model/dashboard.model";

@Component({
    selector: 'app-themes',
    templateUrl: './themes.component.html',
    styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
    public themes: ThemeModel[];

    private apiService: ApiService;
    private theme: ThemeModel;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    public newTheme() {
        this.theme = {};
    }

    public createNewTheme() {
        this.apiService.createTheme(this.theme).subscribe(() => {
            this.themes.push(this.theme);
            this.theme = null;
        });
    }

    ngOnInit() {
        this.apiService.getThemes().subscribe((data: DashboardModel[]) => {this.themes = data});
    }
}
