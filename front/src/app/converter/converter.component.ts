import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Currencies, InputField } from '../enums.enum';

type Choices = { set: Currencies; qtd: Currencies; converted: Currencies };

@Component({
  selector: 'converter',
  imports: [CommonModule, FormsModule],
  providers: [],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss',
})
export class Converter implements OnInit {
  inputFieldEnum = InputField;
  medievalStyle: boolean = false;
  selectOption = [
    { name: 'Tibares', value: Currencies.TIB },
    { name: 'Ouro Real', value: Currencies.ORE },
  ];
  currencyGoldValue = { TIB: 2.5, ORE: 1 };
  currentChoices: Choices = {
    set: Currencies.TIB,
    qtd: Currencies.ORE,
    converted: Currencies.TIB,
  };
  lastChoices: Choices = {
    set: Currencies.TIB,
    qtd: Currencies.ORE,
    converted: Currencies.TIB,
  };
  inputs = {
    set: this.currencyGoldValue[this.currentChoices.set],
    qtd: 1,
    converted: 1,
  };
  showModel: boolean = false;

  constructor() {}

  ngOnInit() {
    this.convert(InputField.QTD);
  }

  set() {
    this.currencyGoldValue[this.currentChoices.set] = this.inputs.set;
  }

  onSelectionChange(event: Event) {
    if (!(event.target instanceof HTMLSelectElement)) {
      return;
    }

    if (this.currentChoices.qtd === this.currentChoices.converted) {
      console.log(event.target.id);
      if (event.target.id == InputField.QTD) {
        console.log(
          'bbbbbbbbbbb',
          this.currentChoices.qtd,
          this.lastChoices.converted
        );
        this.currentChoices.converted = this.lastChoices.qtd;
      } else {
        console.log(
          'aaaaaaaaaaa',
          this.currentChoices.qtd,
          this.lastChoices.converted
        );
        this.currentChoices.qtd = this.lastChoices.converted;
      }
    }

    this.lastChoices = JSON.parse(JSON.stringify(this.currentChoices));
  }

  convert(origin: InputField) {
    let target = origin == InputField.QTD ? InputField.CON : InputField.QTD;

    const multiplier = this.currencyGoldValue[this.currentChoices[origin]];
    const divider = this.currencyGoldValue[this.currentChoices[target]];
    this.inputs[target] = this.convertFormula(
      this.inputs[origin],
      multiplier,
      divider
    );
  }

  convertFormula(input: number, multiplier: number, divider: number) {
    return (input * multiplier) / divider;
  }
}
