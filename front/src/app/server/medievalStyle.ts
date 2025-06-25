import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedievalStyle {
  private medievalStyle = signal(false);

  switch() {
    this.medievalStyle.update((current) => !current);
  }

  getValue() {
    return this.medievalStyle;
  }
}
