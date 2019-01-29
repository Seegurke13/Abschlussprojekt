import {Component, OnInit} from '@angular/core';
import {ThemeModel} from "../model/theme.model";
import {ApiService} from "../api.service";
import {PresetModel} from "../model/preset.model";

@Component({
    selector: 'app-themes',
    templateUrl: './themes.component.html',
    styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
    public themes: ThemeModel[];
    public theme: ThemeModel;

    public presets: PresetModel[];

    private apiService: ApiService;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    ngOnInit() {
        this.apiService.getThemes().subscribe((data: ThemeModel[]) => {this.themes = data});
        this.apiService.getPresets().subscribe((data: PresetModel[]) => {this.presets = data});
    }

    public createNew(): void {
        this.theme = {};
    }

    public saveTheme() {
        if (this.theme.id) {
            this.apiService.saveTheme(this.theme).subscribe((data) => {
            });
            this.themes[this.theme.id] = Object.assign(this.themes[this.theme.id], this.theme);
        } else {
            this.apiService.createTheme(this.theme);
            this.themes.push(this.theme);
        }
    }

    public setTheme(id: number) {
        this.apiService.getTheme(id).subscribe((data: ThemeModel) => {
            this.theme = data;
        });
    }
}
