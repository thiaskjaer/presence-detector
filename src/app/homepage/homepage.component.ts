import { Component, OnInit } from '@angular/core';
import {Device} from '../device';
import {DeviceNameService} from '../device-name.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  deviceNames: any; //JSON object
  data: any;
  device0: string;
  device1: string;
  device2: string;

  device0Status: number;
  device1Status: number;
  device2Status: number;

  constructor(
    private deviceNameService: DeviceNameService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getDeviceNames();
    this.getDeviceStatus();
    this.getData();
  }

  getDeviceStatus() {
    this.http.get<any>('https://ble-presence-detector.firebaseio.com/status.json').subscribe(data => {
      this.device0Status = data['device0'];
      this.device1Status = data['device1'];
      this.device2Status = data['device2'];
    })
  }

  getDeviceNames() {
    this.http.get<any>('https://ble-presence-detector.firebaseio.com/devices.json').subscribe(data => {
      this.deviceNames = data;
      this.device0 = data['device0'];
      this.device1 = data['device1'];
      this.device2 = data['device2'];
    })
  }

  getData(){
    this.http.get<any>('https://ble-presence-detector.firebaseio.com/timestamps.json').subscribe(data => {
      var res = [];
      for (var x in data){
        data.hasOwnProperty(x) && res.push(data[x])
      }
      this.data = res.reverse();
    })
  }

  submitDeviceNames(){
    this.http.patch("https://ble-presence-detector.firebaseio.com/devices.json",
    {
        "device0": this.device0,
        "device1": this.device1,
        "device2": this.device2,
    })
    .subscribe(
        (val) => {
            console.log("PATCH call successful value returned in body", 
                        val);
        },
        response => {
            console.log("PATCH call in error", response);
        },
        () => {
            console.log("The PATCH observable is now completed.");
        });
  }
}
