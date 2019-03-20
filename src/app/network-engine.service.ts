import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkEngineService {

  constructor(public http: HttpClient) {
    console.log('Hellow NetworkEngineProvider Provider');
   }

   readTable(PF) : Promise<any>{
     let url = "http://192.168.8.100:80/web/read.php?pf=";
     let request = this.http.get(url+PF);

     return request.toPromise();

   }
}
