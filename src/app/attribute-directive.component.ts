import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-attribute-directive',
  templateUrl: './attribute-directive.component.html'
})

export class AttributeDirectiveComponent implements OnInit {
  color: string;

  constructor() { }

  ngOnInit() { }
}
