import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { NetworkEngineService } from '../network-engine.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  responseTxt: any;
  items: any;
  Des: any;
  Dev: any;
  Grade: any;
  NIC: any;
  Name: any;
  PF: any;

  constructor(public navCtrl:NavController, public network:NetworkEngineService, private http: HttpClient){

  }

  showTable(){
    this.network.readTable(10074).then(data =>
      {
        //console.log("I received : " + JSON.stringify(data));
        this.responseTxt = "" + JSON.stringify(data);
      })
  }

  ngOnInit(){
    this.http.get('http://192.168.1.43:80/web/read.php?pf=8705').subscribe((response) => {
      console.log('Designation ' + response[0]['Des']);
      console.log('Devition ' + response[0]['Dev']);
      console.log('Grade ' + response[0]['Grade']);
      console.log('NIC ' + response[0]['NIC']);
      console.log('Name ' + response[0]['Name']);
      console.log('PF ' + response[0]['PF']);

      this.Des = response[0]['Des'];
      this.Dev = response[0]['Dev'];
      this.Grade = response[0]['Grade'];
      this.NIC = response[0]['NIC'];
      this.Name = response[0]['Name'];
      this.PF = response[0]['PF'];      
  });
  }

  getEmployeeDetails(){
    this.http.get('http://192.168.1.43:80/web/read.php?pf=8705').subscribe((response) => {
      this.Des = response[0]['Des'];
      this.Dev = response[0]['Dev'];
      this.Grade = response[0]['Grade'];
      this.NIC = response[0]['NIC'];
      this.Name = response[0]['Name'];
      this.PF = response[0]['PF'];
  });    
  }

}
