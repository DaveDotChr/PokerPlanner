import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PokePlanner';
  @Input("width") public width: number = window.visualViewport.width * 0.7;


  ngOnInit() {
    
  }

  resizeContent(event: any){
    let size = window.visualViewport.width * 0.7;
    this.width = size - event + window.visualViewport.width*0.1;
  }


}
