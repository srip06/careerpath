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
import { CareerpathdraftComponent } from './careerpathdraft/careerpathdraft.component';
import { RequestService } from './app.service';
import { BoxComponent } from './careerpathdraft/box/box.component';
import { PositionComponent, PositionModalComponent } from './careerpathdraft/box/position/position.component';
import { LinkComponent } from './careerpathdraft/link/link.component';

export function initFactory(_initService: InitializationService) {
	return () => _initService.appInitialization();
}

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HelloComponent,
		CareerpathdraftComponent,
		BoxComponent,
		PositionComponent,
		PositionModalComponent,
		LinkComponent,
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
		EnvironmentService,
		RequestService
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
