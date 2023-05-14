import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {

  defaultRows: number = 32;
  defaultCols:number = 32;

  @Input() title?: string;
  @Input() placeholderText?: string;
  @Input() rows?: number;
  @Input() cols?: number;

}
