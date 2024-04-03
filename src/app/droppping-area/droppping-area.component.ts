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
    // {
    //   id: '4',
    //   name: 'email',
    //   type: 'name',
    //   description: 'google is the best browser',
    //   dragging: false
    // },
    {
          id: '4',
          title: 'split',
          type: 'split',
          yes: [],
          no: [],
          description: '',
          dragging: false
    }
  ]

  // @Input() treeArray: itemsToDrrop[] = [

  
  //   {
  //     id: '4',
  //     name: 'split',
  //     type: 'split',
  //     yes: [],
  //     no: [
  //       {
  //         id: '4',
  //         name: 'email',
  //         type: 'name',
  //         description: 'google is the best browser',
  //         dragging: false
  //       },
  //       {
  //         id: '4',
  //         name: 'email',
  //         type: 'name',
  //         description: 'google is the best browser',
  //         dragging: false
  //       },
  //       {
  //         id: '4',
  //         name: 'Split',
  //         type: 'split',
  //         description: 'google is the best browser',
  //         yes: [
  //           {
  //             id: '4',
  //             name: 'split',
  //             type: 'split',
  //             description: 'google is the best browser',
  //             dragging: false,
  //             yes: [],
  //             no: [
  //               {
  //                 id: '4',
  //                 name: 'split',
  //                 type: 'split',
  //                 yes: [],
  //                 no: [
  //                   {
  //                     id: '4',
  //                     name: 'email',
  //                     type: 'name',
  //                     description: 'google is the best browser',
  //                     dragging: false
  //                   },
  //                   {
  //                     id: '4',
  //                     name: 'email',
  //                     type: 'name',
  //                     description: 'google is the best browser',
  //                     dragging: false
  //                   },
  //                   {
  //                     id: '4',
  //                     name: 'Split',
  //                     type: 'split',
  //                     description: 'google is the best browser',
  //                     yes: [
  //                       {
  //                         id: '4',
  //                         name: 'split',
  //                         type: 'split',
  //                         description: 'google is the best browser',
  //                         dragging: false,
  //                         yes: [],
  //                         no: [
  //                           {
  //                             id: '4',
  //                             name: 'split',
  //                             type: 'split',
  //                             yes: [],
  //                             no: [
  //                               {
  //                                 id: '4',
  //                                 name: 'email',
  //                                 type: 'name',
  //                                 description: 'google is the best browser',
  //                                 dragging: false
  //                               },
  //                               {
  //                                 id: '4',
  //                                 name: 'email',
  //                                 type: 'name',
  //                                 description: 'google is the best browser',
  //                                 dragging: false
  //                               },
  //                               {
  //                                 id: '4',
  //                                 name: 'Split',
  //                                 type: 'split',
  //                                 description: 'google is the best browser',
  //                                 yes: [
  //                                   {
  //                                     id: '4',
  //                                     name: 'split',
  //                                     type: 'split',
  //                                     description: 'google is the best browser',
  //                                     dragging: false,
  //                                     yes: [],
  //                                     no: [ 
  //                                       {
  //                                         id: '4',
  //                                         name: 'email',
  //                                         type: 'name',
  //                                         description: 'google is the best browser',
  //                                         dragging: false
  //                                       },
  //                                     ]
  //                                 }],
  //                                 no: [],
  //                                 dragging: false
  //                               },  
  //                             ],
  //                             description: 'google is the best browser',
  //                             dragging: false
  //                           },
  //                         ]
  //                     }],
  //                     no: [],
  //                     dragging: false
  //                   },  
  //                 ],
  //                 description: 'google is the best browser',
  //                 dragging: false
  //               },
  //             ]
  //         }],
  //         no: [
  //           {
  //             id: '4',
  //             name: 'email',
  //             type: 'name',
  //             description: 'google is the best browser',
  //             dragging: false
  //           },
  //         ],
  //         dragging: false
  //       },  
  //     ],
  //     description: 'google is the best browser',
  //     dragging: false
  //   },

  // ]



  
  @Input() index?: number






  @Input() DragStart: boolean = false;
  @Input() currentlyHoveredOne: boolean = false;

  constructor(private sharedService: sharedService) { }

  @HostListener('document:mouseup', ['$event'])
  makeitFalse(event: MouseEvent) {
    this.DragStart = false;
  } 

  dataToAdd: any;

  ngOnInit() {

    // this.sharedService.dataToDrop.subscribe(res => {
    //   console.log(res)

    //   this.dataToAdd = res
    // })

    this.sharedService.stuffShared.subscribe((res: any) => {
      this.DragStart = res
      this.currentlyHoveredOne = false

      console.log(this.DragStart)
      // console.log(this.treeArray)
    })

  }



  onMouseleave(e: any) {
    this.currentlyHoveredOne = false
  }

  onDragMove(e: any, data: {title: string, dragging: boolean}) {
    data.dragging = true
  }
  

  dataAddedInSplit(event: any) {
    // console.log(this.treeArray)
  }


  onMouseUp(e: any, index: number) {

    // console.log(this.treeArray)

    // console.log(this.DragStart)
    // if (this.DragStart) {
        
    //   if (this.dataToAdd.type != 'split') {
        
    //     this.treeArray.splice((index+1), 0, this.dataToAdd)
    //   } 
    // else {
    //     let newItem: itemsToDrrop = {
    //       id: this.dataToAdd.id,
    //       name: this.dataToAdd.name,
    //       type: this.dataToAdd.type,
    //       description: this.dataToAdd.description,
    //       dragging: this.dataToAdd.dragging,
    //       // yes: this.treeArray.slice(index + 1), // Set 'yes' to the items after the insertion point
    //       yes: this.treeArray.slice(index + 1), // Set 'yes' to the items after the insertion point
    //       // yes: [], // Set 'yes' to the items after the insertion point
    //       no: [] // 'no' remains empty for now
    //     };

    //     // Remove the items from the main array that are moved to 'yes'
    //     this.treeArray.splice(index + 1, this.treeArray.length - (index + 1));
    //     // Update the 'yes' property of the item before the inserted item (if applicable)
    //     if (index >= 0) {
    //       this.treeArray[index].yes = [newItem];
    //     }
    //     // Insert the new item into the array at the specified index
    //     this.treeArray.splice(index + 1, 0, newItem);

    //   }

    //   console.log(this.dataToAdd)
    //   console.log(index)

    //   console.log(this.treeArray)
    //   this.DragStart = false
    //   this.currentlyHoveredOne = false
    // }
    // console.log(this.treeArray)

  }




  showData() {
    console.log(this.treeArray)
  }
}
