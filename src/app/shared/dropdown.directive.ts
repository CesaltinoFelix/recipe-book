import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') isOpen : Boolean = false;

//this code just open and close a single dropdown in the scream.
/* @HostListener('click') toggleOpen(){
  this.isOpen = !this.isOpen;
} */

@HostListener('document:click', ['$event']) toggleOpen(){
  this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
}
  constructor(private elRef: ElementRef) { }

}
