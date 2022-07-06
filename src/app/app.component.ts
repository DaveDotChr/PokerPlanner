import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { SidebarComponent } from './components/Sidebar/Sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PokePlanner';
  @Input("main_width") public main_width: number = window.visualViewport.width * 0.7;
  @Input("history_width") public history_width: number = window.visualViewport.width * 0.2; 
  @ViewChild('Sidebar') child:SidebarComponent;
  initialWindowsize: number = window.visualViewport.width;


  ngOnInit() {
    
  }

  @HostListener('window:resize')
  onResize() {
    let newSize = window.visualViewport.width;
    this.main_width = newSize * 0.7;
    this.child.width = newSize * 0.1
    this.history_width = newSize * 0.2;
    
    if(newSize < this.initialWindowsize){
      setTimeout(() => {
        if(newSize < window.visualViewport.width){
          this.onResize();
        }
      }, 300);
      this.initialWindowsize = newSize;
    }
  }

  resizeContent(event: any){
    let size = window.visualViewport.width * 0.7;
    this.main_width = size - event + window.visualViewport.width*0.1;
    this.child.width = event;

  }


}
