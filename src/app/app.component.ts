import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: {
    type: string,
    name: string,
    content: string
  }[] = [];

  onServerAdded(serverEvent: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverEvent.serverName,
      content: serverEvent.serverContent
    })
  }
  
  onBlueprintAdded(blueprintEvent: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintEvent.serverName,
      content: blueprintEvent.serverContent
    })

  }

}
