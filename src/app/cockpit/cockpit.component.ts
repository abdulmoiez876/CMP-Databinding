import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated =  new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('newServerContentRef') newServerContentRef: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverDataRef: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverDataRef.value,
      serverContent: this.newServerContentRef?.nativeElement.value
    })
  }
  
  onAddBlueprint(serverDataRef: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverDataRef.value,
      serverContent: this.newServerContentRef?.nativeElement.value
    })
  }
}
