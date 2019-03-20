import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { NetworkEngineService } from '../network-engine.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  responseTxt: any;
  items: any;
  constructor(public navCtrl:NavController, public network:NetworkEngineService){

  }

  showTable(){
    this.network.readTable(10074).then(data =>
      {
        //console.log("I received : " + JSON.stringify(data));
        this.responseTxt = "" + JSON.stringify(data);
        console.log("Printing items : " + data[0]);
      })
  }

}
