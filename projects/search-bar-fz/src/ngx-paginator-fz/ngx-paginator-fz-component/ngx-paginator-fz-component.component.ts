import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-paginator-fz',
  templateUrl: './ngx-paginator-fz-component.component.html',
  styleUrls: ['./ngx-paginator-fz-component.component.scss']
})
export class NgxPaginatorFzComponent implements OnInit {

  @Input() pageIndex: number = 0;
  @Input() text: number = 1;
  /**
   * Index of the page that was selected previously.
   * @breaking-change 8.0.0 To be made into a required property.
   */
  @Input() previousPageIndex?: number;
  /** The current page size */
  @Input() pageSize: number = 15;
  /** The current total number of items being paged */
  @Input() length: number = 15;
  @Input() pageSizeOptions: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  constructor() { }

  ngOnInit(): void {
  }

}
