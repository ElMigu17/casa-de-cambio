import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedievalStyle {
  private readonly medievalStyle = signal(false);

  switch() {
    this.medievalStyle.update((current) => !current);
  }

  getValue() {
    return this.medievalStyle;
  }
}
