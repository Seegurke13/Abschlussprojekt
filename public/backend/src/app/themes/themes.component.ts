import {Component, OnInit} from '@angular/core';
import {ThemeModel} from "../model/theme.model";
import {ApiService} from "../api.service";

@Component({
    selector: 'app-themes',
    templateUrl: './themes.component.html',
    styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
    public themes: ThemeModel[];
    private apiService: ApiService;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    ngOnInit() {
        this.apiService.getThemes().subscribe((data: ThemeModel[]) => {this.themes = data});
    }

}
