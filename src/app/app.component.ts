import { Component, ElementRef, Renderer2 } from '@angular/core';
import { sharedService } from './services/sharedServie';
import { itemsToDrrop } from './models/droppedItemModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  


export class AppComponent {


  constructor(private sharesService: sharedService) {

  }



  items: itemsToDrrop[] = [
    {
      id: '1',
      name: 'email',
      type: 'email',
      description: 'new email',
      dragging: false
    },
    {
      id: '2',
      name: 'name',
      type: 'pI',
      description: 'new name',
      dragging: false
    },
    {
      id: '3',
      name: 'split',
      type: 'split',
      description: 'new name',
      dragging: false,
      yes: [],
      no: [],
    }
  ];



  dragging: boolean = false


    onDragStart(e: any, data: {name: string, dragging: boolean}) {
      this.dragging = true
      this.sharesService.dataToDropFunc(data)
      this.sharesService.stuffFunction(this.dragging)
      console.log(data)
    }

    onDragMove(e: any, data: {name: string, dragging: boolean}) {
      data.dragging = true
    }
    
    
    onDragEnd(e: any, data: {name: string, dragging: boolean}) {
      
      data.dragging = false;
      this.dragging = false;
      // this.sharesService.stuffFunction(false)


    }



    




}



