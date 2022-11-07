import { Injectable, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectEmitChangeService {

  changeOption: Subject<{ template: any, value: any }> = new Subject<{ template: any, value: any }>();
  constructor() { }

  emit(values: { template: any, value: any }): void {
    this.changeOption.next(values);
  }

}