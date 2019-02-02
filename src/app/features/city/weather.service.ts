import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataCity } from './dataCity.dto';

@Injectable()
export class WheatherService{
    
    constructor(private http: HttpClient){

    }

    public getForecast(data:DataCity):Observable<any>{        
        return this.http.get(`${environment.path.openWeather}/data/2.5/forecast/daily?q=${data.name},${data.country}&APPID=${environment.apiKey}&units=metric&cnt=5`);
    }

    public list():Observable<any>{        
        return this.http.get(`${environment.path.endpoints}${this.getApiCity()}?page=0&size=10`);
    }

    public add(data:any):Observable<any>{        
        return this.http.post(`${environment.path.endpoints}${this.getApiCity()}/add`, data);
    }

    private getApiCity(){
        return "/api/city"
    } 
}