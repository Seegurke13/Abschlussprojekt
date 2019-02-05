import {UpdateModel} from "./update.model";
import {FieldModel} from "./field.model";

export interface ThemeModel {
    id?: number;
    name?: string;
    affiliateId?: number;
    updates?: UpdateModel[];
    fields?: FieldModel[];
    autoUpdates?: string[];
}