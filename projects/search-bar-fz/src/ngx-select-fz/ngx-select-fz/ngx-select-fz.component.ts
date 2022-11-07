import { Component, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NgxOptionFzComponent } from '../ngx-option-fz/ngx-option-fz.component';
import { SelectEmitChangeService } from '../select-emit-change.service';

@Component({
  selector: 'ngx-select-fz',
  templateUrl: './ngx-select-fz.component.html',
  styleUrls: ['./ngx-select-fz.component.scss']
})
export class NgxSelectFzComponent implements OnInit {

  @ViewChild('addContainer') select!: ElementRef<any>;
  // @ContentChildren(NgxOptionFzComponent) options!: QueryList<NgxOptionFzComponent>;
  constructor(private smcs: SelectEmitChangeService, private renderer: Renderer2) { }
  @Output() isOpen: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  _isOpen: boolean = false;
  @Input() value: any;
  @Input() size: number = 15;
  templateOption: string = 'Selecciona una opción';
  ngOnInit() {
    this.smcs.changeOption.subscribe((value: { template: any, value: any }) => {
      this.value = value.value;
      this.templateOption = value.template;
      // this.add(this.templateOption);
    });
  }

  // add(template: any): void {
  //   this.value++;
  //   this.renderer.appendChild(this.select.nativeElement, template);
  // }
  // ngAfterContentInit(): void {
  //   this.options.changes.subscribe((options: QueryList<NgxOptionFzComponent>) => {
  //     console.log(options);
  //   });
  // }


  toggle(): void {
    this._isOpen = !this._isOpen;
    this.isOpen.emit(this._isOpen);
  }

}
