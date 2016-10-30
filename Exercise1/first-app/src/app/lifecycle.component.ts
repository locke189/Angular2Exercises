import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <h1>Lifecycle works</h1>
  `,
  styles: []
})
export class LifecycleComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy {

  constructor() { }

  ngOnInit() {
    this.log('OnInit');
  }
  ngOnChanges(){
    this.log('OnChanges');
  }
  ngDoCheck(){
    this.log('OnDoCheck');
  }
  ngAfterContentInit(){
    this.log('AfterContentInit');
  }
  ngAfterContentChecked(){
    this.log('AfterContentChecked');
  }
  ngAfterViewInit(){
    this.log('AfterViewInit');
  }
  ngAfterViewChecked(){
    this.log('AfterViewChecked');
  }
  ngOnDestroy(){
    this.log('OnDestroy');
  }
  private log(hook: string){
    console.log(hook)
  }
}
