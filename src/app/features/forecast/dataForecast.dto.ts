export interface DataForecast {
    cod: string,
    message: number,
    cnt: number,
    list: Array<Weather>
    city:{  
        id:number,
        name:string,
        coord:{  
           lat:number,
           lon:number
        },
        country:string,
        population:number
     }
}

export interface Weather {
   dt: number,
   temp: {
       day: number,
       min: number,
       max: number,
       night: number,
       eve: number,
       morn: number
   },
   pressure: number,
   humidity: number,
   weather: [
       {
           id: number,
           main: string,
           description: string,
           icon: string
       }
   ],
   speed: number,
   deg: number,
   clouds: number,
   rain: number
}