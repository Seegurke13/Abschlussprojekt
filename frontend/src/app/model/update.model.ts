class ExportModel {
    date?: number;
    env?: string;
}

export interface UpdateModel {
    id?: number;
    themeName?: string;
    affiliateId?: number;
    date?: number;
    status?: number;
    type?: number;
    exports?: ExportModel[];
}