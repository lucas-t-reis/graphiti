import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  canvasContext: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    const context = this.canvas.nativeElement.getContext('2d');
    if (context !== null) {
      this.canvasContext = context;
      this.draw();
    }
  }

  draw(): void {
    this.drawCircle(50, 50, 25);
	const coord = this.drawLine(0,0, 100, 100);
	console.log(coord);
  }

  drawCircle(x: number, y: number, radius: number,
    startAngle = 0, endAngle = Math.PI): void {

    if (x == null || y == null) return;
    if (radius && radius <= 0) return;

    this.canvasContext.beginPath();
    this.canvasContext.moveTo(x, y);
    this.canvasContext.arc(x, y, radius, startAngle, endAngle * 2, true);
    this.canvasContext.stroke();

  }

  drawLine(xOrigin: number, yOrigin: number,
	targetX: number, targetY: number): Coordinate {

    this.canvasContext.beginPath();
    this.canvasContext.moveTo(xOrigin, yOrigin);
    this.canvasContext.lineTo(targetX, targetY);
    this.canvasContext.stroke();
    return new Coordinate(targetX, targetY);

  }
}

class Coordinate {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
