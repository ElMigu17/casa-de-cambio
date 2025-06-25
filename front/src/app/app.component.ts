import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MedievalStyle } from './server/medievalStyle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front';
  constructor(public medievalStyleService: MedievalStyle) {}
}
