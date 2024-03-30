import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { itemsToDrrop } from '../../models/droppedItemModel';
import { sharedService } from 'src/app/services/sharedServie';
import { DropppingAreaComponent } from '../droppping-area.component';

@Component({
  selector: 'app-split-component',
  templateUrl: './split-component.component.html',
  styleUrls: ['./split-component.component.css']
})
export class SplitComponentComponent implements OnInit {
  
  
  @Input() dataToAdd: any;
  @Input() isLast: boolean = false;
  @Input() currentlyHoveredOne: boolean = false;
  @Input() index?: number = 0;
  
  @Input() treeArray: itemsToDrrop[] = []

  @Input() data: any;
  @Input() DragStart?: boolean;


  @Output() dataChangedInSplit: EventEmitter<itemsToDrrop[]> = new EventEmitter<itemsToDrrop[]>();


  @HostListener('document:mouseup', ['$event'])
  makeitFalse(event: MouseEvent) {
    this.DragStart = false;
    this.currentlyHoveredOne = false
  } 

  constructor(private sharedService: sharedService) { }
  
  
  ngOnInit() {
    
    // this.sharedService.dataToDrop.subscribe(res => {
    //   console.log(res)

    //   this.dataToAdd = res
    
    //   // console.log(
    //   //   this.index,
    //   //   this.DropppingAreaComponent?.treeArray[this.index]
    //   //   )
        
    
    // })
  }

  
  onHover(event: MouseEvent, data: any) {

    if (event.buttons === 1 && this.DragStart) {

      console.log('hitted', this.DragStart)
      this.currentlyHoveredOne = true
this.DragStart = true
    }
  }

  // onMouseDown(event: MouseEvent, data: any) {
  //   // event.preventDefault();
  //   // this.DragStart = true;
  // }


  onMouseleave(e: any) {
    this.currentlyHoveredOne = false
  }

  @ViewChild(DropppingAreaComponent) DropppingAreaComponent?: DropppingAreaComponent; // Get a reference to the child component

  dataYes: itemsToDrrop[] = []
  dataNo: itemsToDrrop[] = []


  onMouseUp(e: any, data: itemsToDrrop, where: string) {


    console.log(this.DragStart)
    if (this.DragStart) {

      // this.DropppingAreaComponent?.dataAddedInSplit(true)
      // this.DropppingAreaComponent?.onMouseUp(true)
      // where == 'yes'? data.yes?.push(this.dataToAdd) : data.no?.push(this.dataToAdd)

      if (where == 'yes') {

        this.dataYes.push(this.dataToAdd)

        data.yes?.push(this.dataToAdd)
      } else {

        this.dataNo.push(this.dataToAdd)

        data.no?.push(this.dataToAdd)
      }

      // this.newTreeArrayOfYes = (data.yes as itemsToDrrop[])
      // this.newTreeArrayOfNo = (data.no as itemsToDrrop[])

      console.log(data)
 
      this.DragStart = false
      this.currentlyHoveredOne = false
    }

  }

}
