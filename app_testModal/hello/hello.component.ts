import {Component, OnInit, OnDestroy} from '@angular/core';
import {FrameworkService} from '@aps/framework';

import { Session } from '@aps/framework/interfaces/framework.interface';
import * as go from 'gojs';

@Component({
	selector: 'hello',
	templateUrl: './hello.component.html',
})
export class HelloComponent implements OnInit {

	userSession: Session;
	permission = this._frameworkService.checkKey(13);

	constructor(
		private _frameworkService: FrameworkService
	) {
		 
		}
		
	ngOnInit() {
		this._frameworkService.setViewTitle('Home');
		this.userSession = this._frameworkService.getSessionInfo();
	}

}
