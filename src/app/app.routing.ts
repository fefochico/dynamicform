import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './module/form/form.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'form', component: FormComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);