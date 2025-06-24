import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Converter } from './converter/converter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Converter],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front';
}
