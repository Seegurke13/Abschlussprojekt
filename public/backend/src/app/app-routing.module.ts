import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ThemesComponent} from "./themes/themes.component";
import {UpdatesComponent} from "./updates/updates.component";
import {PresetsComponent} from "./presets/presets.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ThemeComponent} from "./theme/theme.component";

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'themes', component: ThemesComponent},
    {path: 'updates', component: UpdatesComponent},
    {path: 'presets', component: PresetsComponent},
    {path: 'theme/:id', component: ThemeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
