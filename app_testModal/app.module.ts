import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// @aps Modules
import { FrameworkModule, FrameworkService,
	EnvironmentService, InterceptorService } from '@aps/framework';
// ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
// App Config
import { InitializationService } from './app.initialization';
// Routing
import { AppRouting } from './app.routing';
// App Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { TestgoComponent } from './testgo/testgo.component';
import { CareerPathComponent } from './career-path/career-path.component';
import { BoxComponent } from './career-path/box/box.component';
import { RoleComponent } from './career-path/role/role.component';
import { TableComponent } from './career-path/table/table.component';
import { TestSvgComponent } from './test-svg/test-svg.component';
import { PractisesvgComponent } from './practisesvg/practisesvg.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { ModalContentComponent } from './test-modal/test-modal.component';

export function initFactory(_initService: InitializationService) {
	return () => _initService.appInitialization();
}

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HelloComponent,
		TestgoComponent,
		CareerPathComponent,
		BoxComponent,
		RoleComponent,
		TableComponent,
		TestSvgComponent,
		PractisesvgComponent,
		TestModalComponent,
		ModalContentComponent
	],
	imports: [
		AppRouting,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		FrameworkModule,
		ModalModule.forRoot(),
	],
	providers: [
		InitializationService,
		{ provide: APP_INITIALIZER, useFactory: initFactory, deps: [InitializationService], multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
		FrameworkService,
		EnvironmentService
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
