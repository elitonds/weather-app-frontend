import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataWeather } from './dataWeather.dto';
import { Injectable } from '@angular/core';

@Injectable()
export class WheatherService{
    
    constructor(private http: HttpClient){

    }

    public getWheather(data:DataWeather):Observable<any>{        
        return this.http.get(`${environment.path.openWeather}?q=${data.city},${data.codCountry}&APPID=${environment.apiKey}`);
    }

    public add(data:any):Observable<any>{        
        return this.http.post(`${environment.path.endpoints}`, data);
    }

}