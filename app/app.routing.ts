import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '@aps/framework';

import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { CareerpathdraftComponent } from './careerpathdraft/careerpathdraft.component';
import { PositionModalComponent } from './careerpathdraft/box/position/position.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'hello', component: HelloComponent },
	{ path: 'careerpathdraft', component: CareerpathdraftComponent },
	{ path: 'modal', component: PositionModalComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: '**', component: NotFoundComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
