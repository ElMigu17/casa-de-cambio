import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedievalStyle } from './server/medievalStyle/medievalStyle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front';
  constructor(public medievalStyleService: MedievalStyle) {}
}
