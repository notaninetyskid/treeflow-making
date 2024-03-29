import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { sharedService } from '../services/sharedServie';
import { itemsToDrrop } from '../models/droppedItemModel';

@Component({
  selector: 'app-droppping-area',
  templateUrl: './droppping-area.component.html',
  styleUrls: ['./droppping-area.component.css']
})
export class DropppingAreaComponent implements OnInit {
  

  @Input() treeArray: itemsToDrrop[] = [
    {
      id: '4',
      name: 'email',
      type: 'name',
      description: 'google is the best browser',
      dragging: false
    },
    
  ]




  
  @Input() index?: number






  DragStart: boolean = false;
  currentlyHoveredOne: boolean = false;

  constructor(private sharedService: sharedService) { }

  @HostListener('document:mouseup', ['$event'])
  makeitFalse(event: MouseEvent) {
    this.DragStart = false;
  } 

  dataToAdd: any;

  ngOnInit() {

    this.sharedService.dataToDrop.subscribe(res => {
      console.log(res)

      this.dataToAdd = res
    })

    this.sharedService.stuffShared.subscribe((res: any) => {
      this.DragStart = res
      this.currentlyHoveredOne = false

      console.log(this.DragStart)
    })

  }



  onHover(event: MouseEvent, data: any) {

    if (event.buttons === 1 && this.DragStart) {

      console.log('hitted', this.DragStart)
      this.currentlyHoveredOne = true

    }
  }

  // onMouseDown(event: MouseEvent, data: any) {
  //   // event.preventDefault();
  //   // this.DragStart = true;
  // }

  onMouseleave(e: any) {
    this.currentlyHoveredOne = false
  }


  
  onDragStart(e: any, data: {name: string, dragging: boolean}) {
    // this.sharedService.dataToDropFunc(data)
    // this.sharedService.stuffFunction(data.dragging)
    // console.log(data)

  }

  onDragMove(e: any, data: {name: string, dragging: boolean}) {
    data.dragging = true
  }
  
  
  onDragEnd(e: any, data: {name: string, dragging: boolean}) {
    
    data.dragging = false;
    // this.sharesService.stuffFunction(false)


  }

  dataAddingIntoSplit: boolean = false

  dataAddedInSplit(e: any) {
    debugger
console.log(e)
    this.dataAddingIntoSplit = true
  }


  dataUpdated(event: any) {
    console.log(event)
  }



  onMouseUp(index: number) {
    console.log(this.DragStart)
    if (this.DragStart) {
console.log(this.dataAddingIntoSplit)
      // if (!this.dataAddingIntoSplit) {
        
      if (this.dataToAdd.type != 'split') {
        
        this.treeArray.splice((index+1), 0, this.dataToAdd)
      } else {
        let newItem: itemsToDrrop = {
          id: this.dataToAdd.id,
          name: this.dataToAdd.name,
          type: this.dataToAdd.type,
          description: this.dataToAdd.description,
          dragging: this.dataToAdd.dragging,
          // yes: this.treeArray.slice(index + 1), // Set 'yes' to the items after the insertion point
          yes: this.treeArray.slice(index + 1), // Set 'yes' to the items after the insertion point
          no: [] // 'no' remains empty for now
        };

        // Remove the items from the main array that are moved to 'yes'
        this.treeArray.splice(index + 1, this.treeArray.length - (index + 1));
        // Update the 'yes' property of the item before the inserted item (if applicable)
        if (index >= 0) {
          this.treeArray[index].yes = [newItem];
        }
        // Insert the new item into the array at the specified index
        this.treeArray.splice(index + 1, 0, newItem);

      }

      console.log(this.dataToAdd)
      console.log(index)
      // }

      console.log(this.treeArray)
      this.DragStart = false
      this.currentlyHoveredOne = false
    }
    console.log(this.treeArray)

  }



}
