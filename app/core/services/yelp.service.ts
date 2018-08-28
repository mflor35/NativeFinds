import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';
import { IYelp } from '../models/yelp.interface';

export interface IYelpService {
    getBusinessByName(name: string): Observable<IYelp>;
}

@Injectable()
export class YelpService implements IYelpService {
    constructor(private restangular: Restangular) {  }

    getBusinessByName(name: string): Observable<IYelp> {
        return this.restangular.all(`/businesses/search?term=${name}&latitude=36.696130&longitude=-121.619065`).getList();
    }
}