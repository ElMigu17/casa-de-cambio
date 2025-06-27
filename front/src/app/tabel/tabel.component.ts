import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedievalStyle } from '../server/medievalStyle/medievalStyle';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// Angular Data Grid Component
import { AgGridAngular } from 'ag-grid-angular';
// Column Definition Type Interface
import type { ColDef, ValueFormatterParams } from 'ag-grid-community';
import { ConversionsService } from '../server/conversionService/conversionsService';

ModuleRegistry.registerModules([AllCommunityModule]);

interface IRow {
  id: number;
  originCurrency: string;
  targetCurrency: string;
  originCurrencyValue: number;
  targetCurrencyValue: number;
  value: number;
  dateTime: Date;
}

@Component({
  selector: 'tabel',
  imports: [CommonModule, FormsModule, AgGridAngular],
  providers: [],
  templateUrl: './tabel.component.html',
  styleUrl: './tabel.component.scss',
})
export class Tabel implements OnInit {
  showModel = true;
  password = '';
  detalhes: IRow | null = null;
  constructor(
    public medievalStyleService: MedievalStyle,
    public conversionsService: ConversionsService
  ) {}

  ngOnInit() {
    this.rowData = this.conversionsService.getValue()();
  }

  rowData: IRow[] = [];

  onCellClicked = (event: any) => {
    this.detalhes = this.rowData[event.rowIndex];
  };
  colDefs: ColDef<IRow>[] = [
    { field: 'id', onCellClicked: this.onCellClicked },
    {
      field: 'originCurrency',
      headerName: 'Moeda de origem',
      onCellClicked: this.onCellClicked,
    },
    {
      field: 'targetCurrency',
      headerName: 'Moeda de destino',
      onCellClicked: this.onCellClicked,
    },
    {
      field: 'value',
      headerName: 'Valor em ouro trocado',
      onCellClicked: this.onCellClicked,
    },
    {
      field: 'dateTime',
      headerName: 'Dia e hora',
      cellDataType: 'dateTime',
      valueFormatter: (params: ValueFormatterParams) => {
        return params.value.toLocaleString().replace(',', '');
      },
      onCellClicked: this.onCellClicked,
    },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };

  login() {
    if (this.password == '1234') {
      this.showModel = false;
    } else {
      alert('Senha incorreta');
    }
  }
}
