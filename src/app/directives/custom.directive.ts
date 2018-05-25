import { Directive, Input, HostListener, ElementRef, Renderer,HostBinding } from '@angular/core';

@Directive({
  selector: '.tntoggle'
})
export class TnToggleDirective {

 @Input('tntoggle') config: Object = {};

  @HostBinding('class.active') private isActive: boolean=false; 


  @HostListener('click', ['$event']) onclick(event: any) {
    this.toggle(event);
  }
  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}
  
  

  toggle(event) {
    event.stopPropagation();
    let target = this.check()
  }

  check() {
   
    if(this.isActive)
    {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
   
  }

}