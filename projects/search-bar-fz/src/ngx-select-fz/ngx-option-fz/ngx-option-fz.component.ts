import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { SelectEmitChangeService } from '../select-emit-change.service';

@Component({
  selector: 'ngx-option-fz',
  templateUrl: './ngx-option-fz.component.html',
  styleUrls: ['./ngx-option-fz.component.scss'],

})
export class NgxOptionFzComponent implements OnInit {

  @ViewChild('option') optionTemplate!: any;
  @Input() value: any = 4;
  constructor(private smcs: SelectEmitChangeService) { }
  @Output() selected: EventEmitter<{template:any, value: any}> = new EventEmitter<{template:any, value: any}>();
  ngOnInit() {
  }

  emit(): void {
    console.log(this.optionTemplate, 'fer');
    this.smcs.emit({template:this.optionTemplate.nativeElement.innerHTML, value: this.value});
  }

}
