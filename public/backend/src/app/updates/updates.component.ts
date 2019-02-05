import {Component, OnInit} from '@angular/core';
import {UpdateModel} from "../model/update.model";

@Component({
    selector: 'app-updates',
    templateUrl: './updates.component.html',
    styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {
    private updates: UpdateModel[];

    constructor() {
    }

    ngOnInit() {
    }

}
