import { Component, HostListener, Input, OnInit } from '@angular/core';
import { itemsToDrrop } from 'src/app/models/droppedItemModel';
import { sharedService } from 'src/app/services/sharedServie';

@Component({
  selector: 'app-basic-drop-place',
  templateUrl: './basic-drop-place.component.html',
  styleUrls: ['./basic-drop-place.component.css']
})
export class BasicDropPlaceComponent implements OnInit {



  @Input() dataToAdd: any;
  @Input() isLast: boolean = false;
  @Input() currentlyHoveredOne: boolean = false;

  @Input() data: any;
  @Input() DragStart: boolean = true;
  @Input() treeArray: itemsToDrrop[] = [];


  @Input() treeyArray: itemsToDrrop[] = []
  @Input() arrayType: string = ''
  @Input() index: number = 0


  @HostListener('document:mouseup', ['$event'])
  makeitFalse(event: MouseEvent) {
    this.DragStart = false;
    this.currentlyHoveredOne = false
  } 

  constructor(private sharedService: sharedService) { }

  ngOnInit(): void {
    this.sharedService.dataToDrop.subscribe(res => {
      console.log(res)

      this.dataToAdd = res
    })
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



  dataYes: itemsToDrrop[] = []
  dataNo: itemsToDrrop[] = []


  onMouseUp() {

    console.log(this.DragStart)
    if (this.DragStart) {


    
      this.treeArray.splice((this.index + 1), 0, this.dataToAdd)


 
      this.DragStart = false
      this.currentlyHoveredOne = false
    }

  }
}
