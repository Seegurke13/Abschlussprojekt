import {Component, Input, OnInit} from '@angular/core';
import {FieldModel} from "../model/field.model";
import {PresetModel} from "../model/preset.model";

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
    @Input()
    public field: FieldModel;
    @Input()
    public name: string;
    @Input()
    public presets: PresetModel[];

    constructor() {
    }

    ngOnInit() {
    }

    public isActive(preset: PresetModel): boolean {
        if (this.field.presets === undefined || preset === undefined) {
            return false;
        }

        return this.field.presets.includes(preset.id);
    }

    public onClickPreset(id: number) {
        if (this.field.presets === undefined || this.field.presets === null) {
            this.field.presets = [];
        }
        if (this.field.presets.includes(id) === true) {
            //deactivate
            this.field.presets = this.field.presets.filter(function (value, index, arr) {
                return value !== id;
            });
        } else {
            this.field.presets.push(id);
        }
    }
}
