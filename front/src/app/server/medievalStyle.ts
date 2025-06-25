import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedievalStyle {
  private medievalStyle = signal(false);

  switch() {
    console.log('aaaaaaaaaaaaaaaaa', this.getValue());
    this.medievalStyle.update((current) => !current);
  }

  getValue() {
    return this.medievalStyle;
  }
}
