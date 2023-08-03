import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild("serverContentInput") serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput) {
    this.serverCreated.emit({
      //Payload being sent to the parent component
      serverName:nameInput.serverName,
      serverContent:this.serverContentInput.nativeElement.value
    })
    console.log(this.serverCreated)
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      //Payload being sent to the parent component
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    })

    console.log(this.blueprintCreated)
  }
}
