import { Component, OnInit } from '@angular/core';
import {PresetModel} from "../model/preset.model";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-presets',
  templateUrl: './presets.component.html',
  styleUrls: ['./presets.component.scss']
})
export class PresetsComponent implements OnInit {
  private presets: PresetModel[];

  private preset: PresetModel;
    private apiService: ApiService;

  constructor(apiService: ApiService) {
      this.apiService = apiService;
  }

  ngOnInit() {
      this.apiService.getPresets().subscribe((data: PresetModel[]) => {this.presets = data;});
  }

  public clickPreset(id: number) {
      this.preset = this.presets.find((data: PresetModel) => { return data.id === id});
  }

  public newPreset() {
      this.preset = {};
  }

  public savePreset() {
      if (this.preset.id === undefined) {
          this.presets.push(this.preset);
          this.apiService.createPreset(this.preset).subscribe((data: any) => {this.preset.id = data.id });
      } else {
          this.apiService.savePreset(this.preset).subscribe();
      }
  }
  
  public removePreset(id: number) {
      this.apiService.removePreset(id).subscribe();
      this.presets = this.presets.filter(function (item: PresetModel, index, arr) {
          return item.id !== id;
      });
  }
}
