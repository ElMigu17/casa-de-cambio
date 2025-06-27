import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Currencies, InputField } from '../enums.enum';
import { MedievalStyle } from '../server/medievalStyle/medievalStyle';
import {
  ConversionsService,
  Convertion,
} from '../server/conversionService/conversionsService';

type Choices = { set: string; qtd: string; converted: string };
interface Map {
  [key: string]: number;
}
@Component({
  selector: 'converter',
  imports: [CommonModule, FormsModule],
  providers: [],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss',
})
export class Converter implements OnInit {
  fistTime = true;
  inputError = false;
  inputFieldEnum = InputField;
  medievalStyle: boolean = false;
  selectOption = [
    { name: 'Tibares', value: Currencies.TIB },
    { name: 'Ouro Real', value: Currencies.ORE },
  ];
  currencyGoldValue: Map = { TIB: 2.5, ORE: 1 };
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

  constructor(
    public medievalStyleService: MedievalStyle,
    public conversionsService: ConversionsService
  ) {}

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
      if (event.target.id == InputField.QTD) {
        this.currentChoices.converted = this.lastChoices.qtd;
        this.fistTime = true;
        this.convert(event.target.id);
      } else if (event.target.id == InputField.CON) {
        this.currentChoices.qtd = this.lastChoices.converted;
        this.fistTime = true;
        this.convert(event.target.id);
      }
    }

    this.lastChoices = JSON.parse(JSON.stringify(this.currentChoices));
  }

  convert(origin: InputField) {
    if (isNaN(this.inputs[origin])) {
      this.inputError = true;
      return;
    }
    this.inputError = false;
    let target = origin == InputField.QTD ? InputField.CON : InputField.QTD;

    const multiplier = this.currencyGoldValue[this.currentChoices[origin]];
    const divider = this.currencyGoldValue[this.currentChoices[target]];
    this.inputs[target] = this.convertFormula(
      this.inputs[origin],
      multiplier,
      divider
    );

    if (this.fistTime) {
      this.fistTime = false;
      return;
    }

    let newConvertion: Convertion = {
      id: this.conversionsService.getNewId(),

      originCurrency: this.currentChoices[origin],
      targetCurrency: this.currentChoices[target],
      value: this.inputs[origin] / multiplier,
      dateTime: new Date(),
    };

    this.conversionsService.addConvertion(newConvertion);
  }

  convertFormula(input: number, multiplier: number, divider: number) {
    return (input * multiplier) / divider;
  }
}
