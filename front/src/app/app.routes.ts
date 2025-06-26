import { Routes } from '@angular/router';
import { Converter } from './converter/converter.component';
import { Tabel } from './tabel/tabel.component';

export const routes: Routes = [
  { path: 'converter', component: Converter },
  { path: 'tabel', component: Tabel },
];
