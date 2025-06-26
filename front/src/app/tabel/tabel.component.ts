import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Currencies, InputField } from '../enums.enum';
import { MedievalStyle } from '../server/medievalStyle';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// Angular Data Grid Component
import { AgGridAngular } from 'ag-grid-angular';
// Column Definition Type Interface
import type { ColDef } from 'ag-grid-community';
import { ConversionsService } from '../server/conversionsService';

ModuleRegistry.registerModules([AllCommunityModule]);

interface IRow {
  id: number;
  originCurrency: string;
  targetCurrency: string;
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
  constructor(
    public medievalStyleService: MedievalStyle,
    public conversionsService: ConversionsService
  ) {}

  ngOnInit() {
    this.rowData = this.conversionsService.getValue()();
  }

  rowData: IRow[] = [];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    { field: 'id' },
    { field: 'originCurrency' },
    { field: 'targetCurrency' },
    { field: 'value' },
    { field: 'dateTime' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };
}
