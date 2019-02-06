import DateTimeFormat = Intl.DateTimeFormat;

export interface DashboardModel {
    id: number;
    name: string;
    affiliateId: number;
    lastUpdate: number|string;
    status: number|string;
}