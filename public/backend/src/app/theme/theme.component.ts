import {Component, Input, OnInit} from '@angular/core';
import {ThemeModel} from "../model/theme.model";
import {PresetModel} from "../model/preset.model";
import {FieldModel} from "../model/field.model";

@Component({
    selector: 'app-theme',
    templateUrl: './theme.component.html',
    styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
    @Input()
    public theme: ThemeModel;
    @Input()
    public presets: PresetModel[];

    public keys(obj: Object): string[] {
        return Object.keys(obj);
    }

    constructor() {
    }

    ngOnInit() {
    }

    public addField()
    {
        this.theme.fields = Object.assign(this.theme.fields, {'name':'New Field'});
    }
}
