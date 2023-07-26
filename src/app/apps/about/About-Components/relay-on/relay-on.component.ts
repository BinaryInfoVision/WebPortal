import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      icon: 'sl-icon-target text-info-gradiant',
      field: 'Our Belief',
      fieldText: 'Each soul is potentially divine. The goal is to manifest this divinity within by controlling nature, external and internal. Do this either by work or worship'
    },
    {
      icon: 'sl-icon-mouse text-info-gradiant',
      field: 'Mission',
      fieldText: 'To unveil the Human Potential to create Global Quality Technology Workforce.'
    },
    {
      icon: 'sl-icon-earphones-alt text-info-gradiant',
      field: 'Vision',
      fieldText: 'To be University of Technology Application.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
