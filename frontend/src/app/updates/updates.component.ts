import {Component, OnInit} from '@angular/core';
import {UpdateModel} from "../model/update.model";
import {ApiService} from "../api.service";

@Component({
    selector: 'app-updates',
    templateUrl: './updates.component.html',
    styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {
    public updates: UpdateModel[];
    public selection: number;
    private apiService: ApiService;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    ngOnInit() {
        this.apiService.getUpdates().subscribe((data: UpdateModel[]) => {
            this.updates = data;
        });
    }

    public exportUpdate(id: number) {
        this.apiService.exportUpdate(id).subscribe();
    }

    public preview(id: number) {

    }

    public approve(id: number) {
        this.apiService.updateApprove(id).subscribe();
        this.updates.find((update: UpdateModel) => {
            return update.id === id;
        }).status = 1;
    }

    public decline(id: number) {
        this.apiService.updateDecline(id).subscribe();
        this.updates.find((update: UpdateModel) => {
            return update.id === id;
        }).status = -1;
    }

}
