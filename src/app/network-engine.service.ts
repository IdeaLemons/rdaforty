import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkEngineService {

  constructor(public http: HttpClient) {
    console.log('Hellow NetworkEngineProvider Provider');
   }

   readTable() : Promise<any>{
     let url = "http://192.168.8.101:80/web/read.php";
     let request = this.http.get(url);

     return request.toPromise();

   }
}
