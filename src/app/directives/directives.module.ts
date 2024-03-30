import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './draggable.directive';
import { movebleDirective } from './movable.directive';



@NgModule({
  declarations: [
    DraggableDirective, movebleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DraggableDirective, movebleDirective
  ]
})
export class DirectivesModule {}
