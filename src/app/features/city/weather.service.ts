import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataCity } from './dataCity.dto';
import { Injectable } from '@angular/core';
import { DataForecast } from '../forecast/dataForecast.dto';
import { DataWeather } from '../forecast/dataWeather.dto';

@Injectable()
export class WheatherService{
    
    constructor(private http: HttpClient){

    }

    public getForecast(data:DataCity):Observable<any>{        
        return this.http.get(`${environment.path.openWeather}/data/2.5/forecast/daily?q=${data.city},${data.codCountry}&APPID=${environment.apiKey}&units=metric&cnt=5`);
    }

    public getWheater(data:DataCity):Observable<any>{        
        return this.http.get(`${environment.path.openWeather}/data/2.5/weather?q=${data.city},${data.codCountry}&APPID=${environment.apiKey}&units=metric`);
    }

    public add(data:any):Observable<any>{        
        return this.http.post(`${environment.path.endpoints}`, data);
    }

    public getMockForecast():DataForecast{
        return {
            "city": {
                "id": 3469968,
                "name": "Blumenau",
                "coord": {
                    "lon": -49.0659,
                    "lat": -26.9196
                },
                "country": "BR",
                "population": 293949
            },
            "cod": "200",
            "message": 0.3121386,
            "cnt": 7,
            "list": [
                {
                    "dt": 1548946800,
                    "temp": {
                        "day": 31,
                        "min": 18.19,
                        "max": 31,
                        "night": 19.42,
                        "eve": 19.33,
                        "morn": 31
                    },
                    "pressure": 984.34,
                    "humidity": 46,
                    "weather": [
                        {
                            "id": 502,
                            "main": "Rain",
                            "description": "heavy intensity rain",
                            "icon": "10d"
                        }
                    ],
                    "speed": 1.01,
                    "deg": 32,
                    "clouds": 32,
                    "rain": 13.11
                },
                {
                    "dt": 1549033200,
                    "temp": {
                        "day": 30.31,
                        "min": 21.34,
                        "max": 32.48,
                        "night": 23.36,
                        "eve": 26.96,
                        "morn": 21.34
                    },
                    "pressure": 987.65,
                    "humidity": 81,
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "speed": 1.31,
                    "deg": 47,
                    "clouds": 76,
                    "rain": 2.42
                },
                {
                    "dt": 1549119600,
                    "temp": {
                        "day": 32.38,
                        "min": 21.38,
                        "max": 32.38,
                        "night": 21.98,
                        "eve": 21.7,
                        "morn": 22.83
                    },
                    "pressure": 985.66,
                    "humidity": 74,
                    "weather": [
                        {
                            "id": 502,
                            "main": "Rain",
                            "description": "heavy intensity rain",
                            "icon": "10d"
                        }
                    ],
                    "speed": 1.53,
                    "deg": 251,
                    "clouds": 12,
                    "rain": 31.54
                },
                {
                    "dt": 1549206000,
                    "temp": {
                        "day": 24.05,
                        "min": 19.86,
                        "max": 24.05,
                        "night": 19.86,
                        "eve": 20.6,
                        "morn": 23.88
                    },
                    "pressure": 997.84,
                    "humidity": 0,
                    "weather": [
                        {
                            "id": 501,
                            "main": "Rain",
                            "description": "moderate rain",
                            "icon": "10d"
                        }
                    ],
                    "speed": 1.17,
                    "deg": 108,
                    "clouds": 100,
                    "rain": 11.69
                },
                {
                    "dt": 1549292400,
                    "temp": {
                        "day": 20.97,
                        "min": 19.87,
                        "max": 20.97,
                        "night": 19.87,
                        "eve": 20.13,
                        "morn": 20.87
                    },
                    "pressure": 1000.39,
                    "humidity": 0,
                    "weather": [
                        {
                            "id": 502,
                            "main": "Rain",
                            "description": "heavy intensity rain",
                            "icon": "10d"
                        }
                    ],
                    "speed": 1.79,
                    "deg": 108,
                    "clouds": 88,
                    "rain": 24.05
                }
            ]
        }
    }

    public getMockWeather():DataWeather{
        return {
            "coord": {
                "lon": -49.07,
                "lat": -26.92
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 31,
                "pressure": 1010,
                "humidity": 74,
                "temp_min": 31,
                "temp_max": 31
            },
            "visibility": 10000,
            "wind": {
                "speed": 4.6,
                "deg": 50
            },
            "clouds": {
                "all": 20
            },
            "dt": 1548968400,
            "sys": {
                "type": 1,
                "id": 8398,
                "message": 0.0032,
                "country": "BR",
                "sunrise": 1548924584,
                "sunset": 1548972574
            },
            "id": 3469968,
            "name": "Blumenau",
            "cod": 200
        }
    }

}