import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { Config } from '@aps/framework/interfaces/framework.interface';
import { FrameworkService, EnvironmentService } from '@aps/framework';
import { environment } from '../environments/environment';

@Injectable()
export class InitializationService {

	constructor(
		private _environment: EnvironmentService,
		private _http: HttpClient,
		private _framework: FrameworkService,
	) { }

	/**
	 * App Initialization
	 */
	public appInitialization() {
		return new Promise((resolve, rejects) => {
			this._environment.loadEnvironment(environment)
			Observable.forkJoin(
				this.getConfig(),
				this._framework.login()
			).subscribe(
				data => {
					this._framework.loadAppConfig(data[0]);
					resolve(true);
				}
			);
		});
	}

	getConfig(): Observable<any> {
		return this._http.get('./app.config.json')
	}

}
