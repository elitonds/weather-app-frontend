import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataCity } from './dataCity.dto';
import { Injectable } from '@angular/core';

@Injectable()
export class WheatherService{
    
    constructor(private http: HttpClient){

    }

    public getWheather(data:DataCity):Observable<any>{        
        return this.http.get(`${environment.path.openWeatherData}?q=${data.city},${data.codCountry}&APPID=${environment.apiKey}&units=metric`);
    }

    public add(data:any):Observable<any>{        
        return this.http.post(`${environment.path.endpoints}`, data);
    }

}