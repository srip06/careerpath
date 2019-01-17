import {Component, OnInit, OnDestroy} from '@angular/core';
import {FrameworkService} from '@aps/framework';

import { Session } from '@aps/framework/interfaces/framework.interface';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

	userSession: Session;

	constructor(
		private _frameworkService: FrameworkService
	) {}

	ngOnInit() {
		this._frameworkService.setViewTitle('Home');
		this.userSession = this._frameworkService.getSessionInfo();
	}

}
