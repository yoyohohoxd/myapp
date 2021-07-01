import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="" style="height: 200px;width: 200px;">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'" style="height: 200px;width: 200px;">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'" style="height: 200px;width: 200px;">{{ value }}</button>
  `,
  styles: []
})

export class SquareComponent {

  @Input() value!: 'X' | 'O';

}
