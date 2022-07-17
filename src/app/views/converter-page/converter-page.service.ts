import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConverterPageService {
  constructor() {}

  convert(binary: number) {
    return parseInt(binary.toString(), 2);
  }
}
