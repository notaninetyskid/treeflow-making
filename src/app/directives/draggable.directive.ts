import { Directive, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Subject, switchMap, take, takeUntil } from 'rxjs';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  constructor() { }

 
  private dragging: boolean = false

  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent) {
    this.dragging = true;
    this.dragStart.emit(event)

  }


  
  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent) {

    if (!this.dragging) {
      return;
    }
// console.log('asdashdajsdgjag')
    this.dragMove.emit(event)
  }
  
  @HostListener('document:pointerup', ['$event'])
  onPointerUp(event: PointerEvent) {

    if (!this.dragging) {
      return;
    }

    this.dragging = false;
    this.dragEnd.emit();

  }



}
