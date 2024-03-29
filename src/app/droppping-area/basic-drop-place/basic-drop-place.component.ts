import { Component, HostListener, Input, OnInit } from '@angular/core';
import { itemsToDrrop } from 'src/app/models/droppedItemModel';

@Component({
  selector: 'app-basic-drop-place',
  templateUrl: './basic-drop-place.component.html',
  styleUrls: ['./basic-drop-place.component.css']
})
export class BasicDropPlaceComponent implements OnInit {



  @Input() dataToAdd?: itemsToDrrop;
  @Input() isLast: boolean = false;
  @Input() currentlyHoveredOne: boolean = false;

  @Input() data?: itemsToDrrop;
  @Input() DragStart?: boolean;
  @Input() treeArray: itemsToDrrop[] = [];

  @HostListener('document:mouseup', ['$event'])
  makeitFalse(event: MouseEvent) {
    this.DragStart = false;
    this.currentlyHoveredOne = false
  } 

  constructor() { }

  ngOnInit(): void {
  }


  
  onHover(event: MouseEvent, data: any) {

    if (event.buttons === 1 && this.DragStart) {

      console.log('hitted', this.DragStart)
      this.currentlyHoveredOne = true

    }
  }


  onMouseleave(e: any) {
    this.currentlyHoveredOne = false
  }
}
