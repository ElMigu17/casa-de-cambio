import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Currencies, InputField } from '../enums.enum';

@Component({
  selector: 'converter',
  imports: [CommonModule, FormsModule],
  providers: [],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss',
})
export class Converter implements OnInit {
  inputFieldEnum = InputField;
  selectOption = [
    { name: 'Tibares', value: Currencies.TIB },
    { name: 'Ouro Real', value: Currencies.ORE },
  ];
  inputs = { qtd: 1, converted: 1 };
  currentChoices: { qtd: Currencies; converted: Currencies } = {
    qtd: Currencies.ORE,
    converted: Currencies.TIB,
  };
  lastChoices: { qtd: Currencies; converted: Currencies } = {
    qtd: Currencies.ORE,
    converted: Currencies.TIB,
  };
  currencyGoldValue = { TIB: 2.5, ORE: 1 };

  constructor() {}

  ngOnInit() {
    this.convert(InputField.QTD);
  }

  onSelectionChange(event: Event) {
    if (!(event.target instanceof HTMLSelectElement)) {
      return;
    }

    if (this.currentChoices.qtd === this.currentChoices.converted) {
      if (event.target.id == InputField.QTD) {
        this.currentChoices.converted = this.lastChoices.qtd;
      } else {
        this.currentChoices.qtd = this.lastChoices.converted;
      }
    }

    this.lastChoices = JSON.parse(JSON.stringify(this.currentChoices));
  }

  convert(origin: InputField) {
    let target = origin == InputField.QTD ? InputField.CON : InputField.QTD;

    const multiplier = this.currencyGoldValue[this.currentChoices[origin]];
    const divider = this.currencyGoldValue[this.currentChoices[target]];
    this.inputs[target] = (this.inputs[origin] * multiplier) / divider;
  }
}
