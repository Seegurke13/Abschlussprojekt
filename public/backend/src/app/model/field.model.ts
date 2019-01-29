import {PresetModel} from "./preset.model";

export interface FieldModel {
    id?: string;
    source?: string;
    presets?: PresetModel[];
}