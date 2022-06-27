import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { invoke } from '@tauri-apps/api/tauri';
import { message } from '@tauri-apps/api/dialog';

type Ticket = {
    name: String;
    CHR: number;
    inhalt: String;
    // ersteller: String;
    // zuständiger: String;
}

@Component({
  selector: 'app-Planning',
  templateUrl: './Planning.component.html',
  styleUrls: ['./Planning.component.scss']
})
export class PlanningComponent implements OnInit {
  

  @ViewChild(MatSelect) select: MatSelect;
  tickets: Ticket[] = [
    {name: "Test1", CHR: 1, inhalt: "Inhalt1"},
    {name: "Test2", CHR: 2, inhalt: "Inhalt2"},
    {name: "Test3", CHR: 3, inhalt: "Inhalt3"},
    {name: "Test4", CHR: 4, inhalt: "Inhalt4"},
    {name: "Test5", CHR: 5, inhalt: "Inhalt5"},
    {name: "Test6", CHR: 6, inhalt: "Inhalt6"}
  ]
  selectedTicket: Observable<any>;
  testvar: String = "test";
  $test: Subscription;
  selectVal: Ticket = this.tickets[0];
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.selectedTicket = new Observable(value => {
      value.next(this.select.value);
    });
  }

  public checkValue(){
    console.log(this.select.value);
    console.log(this.select);
    invoke<Ticket[]>("wait").then((message: Ticket[]) => this.tickets = message
    );
    this.selectedTicket;
  }


  onTicketChange(){
    console.log(this.selectVal);
    console.log(this.selectVal.name);
    //this.testvar = ticket.name;
  }

}
