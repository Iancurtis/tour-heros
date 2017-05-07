import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styles: [`
    :host {
      display: block;
      border: 1px solid black;
    }
  `],
})

export class AttributeDirectiveComponent implements OnInit {
  color: string;

  constructor() { }

  ngOnInit() { }
}
