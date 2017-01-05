

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { LocalizationModel } from './localization.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalizationService{

    constructor(private _http:Http){

    }
   public LoadLocalizationData(): Observable<LocalizationModel>{
        let localizationPath='assets/localization/';
        let localizationFile = localizationPath + environment.localization+'.json';
        

       return  this._http.get(localizationFile)
        .map((response:Response)=> <LocalizationModel>response.json())
        .do(data => console.log('Localization: ' + JSON.stringify(data)));
    }


}