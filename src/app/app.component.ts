import { Component, ComponentRef, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { sharedService } from './services/sharedServie';
import { itemsToDrrop } from './models/droppedItemModel';
import { DropppingAreaComponent } from './droppping-area/droppping-area.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  


export class AppComponent {


  constructor(private sharesService: sharedService) {

  }

  @ViewChild(DropppingAreaComponent) DropppingAreaComponent?: DropppingAreaComponent; // Get a reference to the child component
  



  items: itemsToDrrop[] = [
    {
      id: '1',
      title: 'Items in your cart are selling out fast',
      sidebar: 'EMAIL',
      type: 'email',
      description: 'Items in your cart are selling out fast. Get them before they are gone',
      dragging: false
    },
    {
      id: '2',
      title: 'SMS',
      sidebar: 'SMS',
      type: 'sms',
      data: {
        phNo: 8287340150 ,
        message: '',
        aboutMessage: 'Message as recipients will see it '
      },
      description: 'new SMS',
      dragging: false
    },
    
    {
      id: '2',
      title: 'WHATSAPP',
      sidebar: 'WHATSAPP',
      data: {
        phNo: 8287340150 ,
        message: '',
        aboutMessage: 'Message as recipients will see it '
      },
      type: 'whatsapp',
      description: 'new Whatsapp',
      dragging: false
    },
    
  ];

  flowAction = [
   
    
    {
      id: '3',
      title: 'DELAY',
      sidebar: 'DELAY',
      type: 'delay',
      data: {
        time: '11',
        completed: '0'
      },
      description: 'new delay',
      dragging: false,
      yes: [],
      no: [],
    },

    {
      id: '3',
      title: 'TAG CONTACT/DEAL',
      sidebar: 'TAG CONTACT/DEAL',
      type: 'tagContactDeal',
      description: 'new tagContactDeal',
      dragging: false,
      yes: [],
      no: [],
    },
    {
      id: '3',
      title: 'SPLIT',
      sidebar: 'SPLIT',
      type: 'split',
      description: 'new name',
      dragging: false,
      yes: [],
      no: [],
    },
  ]



  dragging: boolean = false


    onDragStart(e: any, data: {title: string, dragging: boolean}) {
      this.dragging = true
      this.sharesService.dataToDropFunc(data)
      this.sharesService.stuffFunction(this.dragging)
      console.log(data)
    }

    onDragMove(e: any, data: {title: string, dragging: boolean}) {
      data.dragging = true
    }
    
    
    onDragEnd(e: any, data: {title: string, dragging: boolean}) {
      
      data.dragging = false;
      this.dragging = false;
      // this.sharesService.stuffFunction(false)


    }



    showData(){
console.log(this.DropppingAreaComponent?.treeArray)
    }




}



