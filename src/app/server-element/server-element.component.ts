import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterContentInit, OnDestroy{
  //"element" is the name of the input property
 @Input('servElement') element:{type: string, name:string, content: string};
 @Input() name: string;

  constructor() { 
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }

  ngDoCheck(){
    console.log('ngDoCheck called')
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(){
 console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }
}
