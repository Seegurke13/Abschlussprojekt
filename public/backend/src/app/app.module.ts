import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PresetComponent} from './preset/preset.component';
import {ThemeComponent} from './theme/theme.component';
import {FieldComponent} from './field/field.component';
import {ThemesComponent} from './themes/themes.component';
import {PresetsComponent} from './presets/presets.component';
import {UpdateComponent} from './update/update.component';
import {UpdatesComponent} from './updates/updates.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        PresetComponent,
        ThemeComponent,
        FieldComponent,
        ThemesComponent,
        PresetsComponent,
        UpdateComponent,
        UpdatesComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
