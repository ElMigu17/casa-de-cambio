import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'converter',
  imports: [CommonModule],
  providers: [],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss',
})
export class Converter implements OnInit, AfterViewInit {
  selectOption = [
    { name: 'Tibares', value: 'TIB' },
    { name: 'Ouro Real', value: 'ORE' },
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
