import { Injectable } from '@angular/core';
import { FrameworkService, EnvironmentService } from '@aps/framework';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { LiteralPrimitive } from '@angular/compiler';

@Injectable()

export class RequestService {

    baseUrl;
    headers = new HttpHeaders({'Authorization': '718a4158a5beb43389b1feb158ec2093c86dca57411d7d68e408bce110edafa6'});

    constructor(
        private _frameworkService: FrameworkService,
        private _enivronment: EnvironmentService,
        private _http: HttpClient
    ){
        this.baseUrl = this._enivronment.getEnvVariable('serviceUrl') + 'careerpath/v1';
    }

    //fetch lattice basic details from middleware
    fetchLatticeDetails(latticeID){
        return this._http.get(this.baseUrl+'/FetchLattice/'+latticeID, {headers: this.headers})
        .map(
           (res: Response)=>{
                const data =res;
                return data;
           })
    }

    //fetch lattice department, titles ,boxID's from API by sending latticeID as a parameter
    fetchLatticeDeptTitle(latticeID){ 
        return this._http.get(this.baseUrl+'/FetchLatticeDeptTitle/'+latticeID, {headers: this.headers})
        .map(
           (res: Response)=>{
                const data =res;
                return data;
           })
    }

    //fetch lattice box details from API by sending boxID as a parameter
    fetchLatticeBox(boxID){
        return this._http.get(this.baseUrl+'/FetchLatticeBox/'+boxID, {headers: this.headers})
        .map(
           (res: Response)=>{
                const data =res;
                return data;
           })
    }

    //fetch Lattice Position details from server using get request
    fetchLatticePosition(positionID){       
        return this._http.get(this.baseUrl+'/FetchLatticePosition/'+positionID, {headers: this.headers})
        .map(
           (res: Response)=>{
                const data =res;
                return data;
           })
    }

     //fetch Lattice Position details from server using get request
    fetchLatticeLinks(latticeID){       
        return this._http.get(this.baseUrl+'/FetchLatticeLinks/'+latticeID, {headers: this.headers})
        .map(
           (res: Response)=>{
                const data =res;
                return data;
           })
    }
}