import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '@aps/framework';

import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { TestgoComponent } from './testgo/testgo.component';
import { CareerPathComponent } from './career-path/career-path.component';
import { TestSvgComponent } from './test-svg/test-svg.component';
import { PractisesvgComponent } from './practisesvg/practisesvg.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { ModalContentComponent } from './test-modal/test-modal.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'hello', component: HelloComponent },
	{ path: 'testgo', component: TestgoComponent },
	{ path:'careerpath', component: CareerPathComponent },
	{ path: 'testsvg', component: TestSvgComponent },
	{ path: 'psvg', component: PractisesvgComponent },
	{ path: 'TestModal', component: TestModalComponent },
	{ path: 'modal', component: ModalContentComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: '**', component: NotFoundComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
