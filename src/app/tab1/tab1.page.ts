import { Component } from '@angular/core';
import { EmpData } from '../services/forty.services';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl:NavController, private empData:EmpData){

  }

  ngOnInit(){
    this.empData.getEmployee('8705');
  }

  getEmployee(EMPNO){
    this.empData.getEmployee(EMPNO).subscribe(Response => {
      console.log(Response);
    })
  }
}
