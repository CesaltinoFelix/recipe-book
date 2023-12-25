import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') isOpen : Boolean = false;

@HostListener('click') toggleOpen(){
  this.isOpen = !this.isOpen;
}
  constructor() { }

}
