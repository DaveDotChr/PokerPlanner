import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';

type link = {path: String; name: String};
enum elementstatus {
  normal,
  drag,
  resize
}


@Component({
  selector: 'app-Sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrls: ['./Sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input('width') public width: number = window.visualViewport.width * 0.1;
  @Output() resized = new EventEmitter<number>();
  

  public mouse!: { x: number; y: number; };
  public status: elementstatus = elementstatus.normal;
  smth: any;
  smth2: any;

  links: link[] = [{path: "components/Planning",name: 'Planning'},
                   {path: "components/Overview",name: 'Overview'}];
  constructor() { }
  
  ngOnInit() {
    
  }
  //TODO: Wenn kurz nach initialisierung der Komponente resized wird, kann es passieren dass, 
  //      obwohl linksklick nicht mehr gehalten wird weiter resized wird.
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent){
     this.mouse = {
        x: event.clientX,
        y: event.clientY
     }
     if(this.status === elementstatus.drag){
       //this.width = this.mouse.x;
       this.resized.emit(this.mouse.x);
     }
  }
  
  setStatus(event: MouseEvent, status: number){
    if(status === 1){
      this.status = elementstatus.drag;
    } else if (status === 2){
      this.status = elementstatus.normal;
    }
  }

}
