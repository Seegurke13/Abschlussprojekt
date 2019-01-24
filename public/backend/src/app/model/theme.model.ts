import {UpdateModel} from "./update.model";

export interface ThemeModel {
    id: number;
    name: string;
    affiliateId: number;
    updates: UpdateModel[];
}