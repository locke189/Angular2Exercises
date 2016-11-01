import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };

  @Input() defaultColor ='white';
  @Input('dirHighlight') highlightColor ='green';


  private backgroundColor: string;

  constructor() {

  }

  ngOnInit(){
      this.backgroundColor = this.defaultColor;
  }

}
