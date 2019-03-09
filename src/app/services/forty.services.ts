import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
    export class EmpData{
        http:any;
        baseUrl:String;

        constructor(http:Http){
            this.http=http;
            this.baseUrl='https://idealemons.com';
        }

        getEmployee(EMPNO){
            return this.http.get(this.baseUrl+'/codebeautify.json?EMPNO='+EMPNO)
                .map(res => res.json());
        }
    }