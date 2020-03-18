import { Injectable } from '@angular/core';
//import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { Device } from './Device';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeviceNameService {
  

  constructor(private http: HttpClient) {
    
  }
  private dbURL = 'https://ble-presence-detector.firebaseio.com/devices.json';
  //deviceList: AngularFireList<Device> = null;

  /*constructor(private db: AngularFireDatabase) {
    this.deviceList = db.list(this.dbPath);
  }

  getDevicesList(): AngularFireList<Device> {
    return this.deviceList;
  }*/
}
