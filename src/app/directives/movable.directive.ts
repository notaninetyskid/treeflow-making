import { Directive, HostBinding, HostListener } from "@angular/core";
import { DraggableDirective } from "./draggable.directive";
import { DomSanitizer } from "@angular/platform-browser";

@Directive({
    selector: '[appMovable]'
}) export class movebleDirective extends DraggableDirective {


    // constructor(private sanitizer: DomSanitizer) {}


    private position = {x: 0, y: 0}
    private startPosition: any;


    @HostBinding('style.transform') get transform() {

        return `translateX(${this.position.x}px) translateY(${this.position.y}px)`

    }

    @HostListener('dragStart', ['$event']) onDragStarted(event: PointerEvent) {

        this.startPosition = {
            x: event.clientX,
            y: event.clientY
        }

        // console.log('lgged')

    }

    
    @HostListener('dragMove', ['$event']) onDragMoving(event: PointerEvent) {

        this.position.x = event.x - this.startPosition.x
        this.position.y = event.y - this.startPosition.y

    }
    
    @HostListener('dragEnd') onDragEnded() {
        this.position.x = 0
        this.position.y = 0
    }




}