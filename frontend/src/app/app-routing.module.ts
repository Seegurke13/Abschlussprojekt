import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThemesComponent} from "./themes/themes.component";
import {UpdatesComponent} from "./updates/updates.component";
import {PresetsComponent} from "./presets/presets.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ThemeComponent} from "./theme/theme.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [
    {path: '', component: UpdatesComponent},
    {path: 'themes', component: ThemesComponent},
    {path: 'updates', component: UpdatesComponent},
    {path: 'presets', component: PresetsComponent},
    {path: 'themes/:id', component: ThemeComponent},
    {path: 'presets/:id', component: PresetsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
