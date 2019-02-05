import {Component, Input, OnInit} from '@angular/core';
import {ThemeModel} from "../model/theme.model";
import {PresetModel} from "../model/preset.model";
import {FieldModel} from "../model/field.model";
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
    public theme: ThemeModel;
    public presets: PresetModel[];
    private apiService: ApiService;
    private route: ActivatedRoute;

    constructor(apiService: ApiService, route: ActivatedRoute) {
        this.apiService = apiService;
        this.route = route;
    }

    ngOnInit() {
        this.getTheme();
        this.getPresets();
    }

    public saveTheme(): void {
        this.apiService.saveTheme(this.theme).subscribe();
    }

    public addField(): void {
        this.theme.fields.push({});
    }

    public deleteField(id: string): void {
        this.theme.fields = this.theme.fields.filter(function (item: FieldModel, index, arr) {
           return item.id !== id;
        });
    }

    private getTheme() {
        let id: number = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.apiService.getTheme(id).subscribe((data: ThemeModel) => {this.theme = data;});
    }

    private getPresets() {
        this.apiService.getPresets().subscribe((data: PresetModel[]) => {this.presets = data;});
    }
}
