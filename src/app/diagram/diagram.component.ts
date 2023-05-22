import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {
  modeler: any;

  constructor() { }

  ngOnInit(): void {
  //   this.modeler = new Modeler({
  //     container: '#canvas',
  //     width: '100%',
  //     height: '600px',
  //     propertiesPanel: {
  //       parent: '#properties'
  //     },
  //     additionalModules: [
  //       tokenSimulation,
  //       propertiesPanelModule,
  //       propertiesProviderModule,
  //     ]
  //   });
  //   this.load();
  // }
  // load() {
  //   throw new Error('Method not implemented.');
  }

}
