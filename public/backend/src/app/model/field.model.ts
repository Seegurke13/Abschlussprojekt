import {PresetModel} from "./preset.model";

export interface FieldModel {
    name?: string;
    source?: string;
    presets?: PresetModel[];
}