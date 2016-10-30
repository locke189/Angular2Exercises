import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  private elementRef: ElementRef;
  constructor(elementRef: ElementRef, private renderer: Renderer) {
    this.elementRef = elementRef;
    this.elementRef.nativeElement.style.backgroundColor = 'green';

    this.renderer.setElementStyle(this.elementRef.nativeElement, 'border-width', '3px');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'border-style', 'solid');
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'border-color', 'red');

  }

}
