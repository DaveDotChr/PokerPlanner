import { Component, OnInit } from '@angular/core';
import { invoke } from '@tauri-apps/api/tauri';

@Component({
  selector: 'app-Overview',
  templateUrl: './Overview.component.html',
  styleUrls: ['./Overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //invoke<String>("wait").then((message: String) => console.log(message));
    
  }

}
