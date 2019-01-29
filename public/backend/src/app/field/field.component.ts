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

    public isPresetActive(presets: PresetModel[], preset: PresetModel): boolean {
        if (presets === undefined || preset === undefined) {
            return false;
        }
        return (undefined !== presets.find((preset1: PresetModel) => { return preset.id === preset1.id}));
    }

    public changePresetState(id: number) {
        let fieldPreset: PresetModel = this.field.presets.find((presetField: PresetModel) => { return presetField.id === id});
        if (fieldPreset === undefined) {
            console.log('test');
            let preset: PresetModel = this.presets.find(function (element) {
                return element.id === id;
            });
            this.field.presets.push(preset);
        } else {
            this.field.presets = this.field.presets.filter((preset: PresetModel) => { return preset.id !== id});
        }
    }
}
