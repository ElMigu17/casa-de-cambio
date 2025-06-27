import { Injectable, signal } from '@angular/core';

export type Convertion = {
  id: number;
  originCurrency: string;
  targetCurrency: string;
  value: number;
  dateTime: Date;
};

@Injectable({
  providedIn: 'root',
})
export class ConversionsService {
  private readonly convertions = signal<Convertion[]>([]);

  addConvertion(newConvertion: Convertion) {
    this.convertions.update((current) => [...current, newConvertion]);
  }

  getValue() {
    return this.convertions;
  }

  getNewId() {
    const convertionsLength = this.convertions().length;
    if (convertionsLength == 0) {
      return 0;
    }
    return this.convertions()[convertionsLength - 1].id + 1;
  }
}
