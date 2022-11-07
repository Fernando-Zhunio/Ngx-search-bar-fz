import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchBarFzService } from '../ngx-search-bar-fz.service';

@Component({
  selector: 'ngx-search-bar-fz',
  templateUrl: './ngx-search-bar-fz.component.html',
  styleUrls: ['./ngx-search-bar-fz.component.scss'],
})
export class NgxSearchBarFzComponent implements OnInit {

  @Input() isSticky = true;
  @Input() title = 'SearchBarFz';
  @Input() placeholder = 'Buscar';
  @Input() nameInput = 'fz';
  @Input() interval = 1000;
  @Input() hasInterval = true;
  @Input() url = 'localhost:3000/api/products';
  @Input() canModifyBarSearch = true;
  @Input() filterData: any = {};
  @Input() isFilterMenu = false;
  @Input() isFilterWithNotNull = false;
  @Input() backgroundColor = '#fff';
  @ViewChild('btnFilter') btnFilter!: ElementRef;
  @ViewChild('dropdown') dropdown!: ElementRef;

  @Output() isLoading: EventEmitter<any> = new EventEmitter<any>();
  @Output() data: EventEmitter<any> = new EventEmitter<any>();

  productSearch = '';
  subscription!: Subscription;
  intervalSearch: any;
  isOpenFilters: boolean = false;

  pageEvent: PageEvent = {
    length: 0,
    pageIndex: 0,
    pageSize: 15,
  };

  widthDropdown!: number;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.target.innerWidth);
    this.repositionDropdown();
  }
  constructor(private searchService: SearchBarFzService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dropdown.nativeElement.style.display = 'block';
    this.repositionDropdown();
    // this.dropdown.nativeElement.style.display = '';
  }

  buscarInterval(event: any): void {
    clearTimeout(this.intervalSearch);
    if (event['keyCode'] === 13) { this.searchBarReset(); return; }
    if (this.hasInterval) {
      this.intervalSearch = setTimeout(() => {
        this.searchBarReset();
      }, this.interval);
    } else {
      this.searchBarReset();
    }
  }

  searchBar($event = this.pageEvent) {
    this.isLoading.emit(true);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.pageEvent = $event;
    const filters = this.isFilterWithNotNull ? this.filterWithNotNull() : this.filterData
    this.subscription = this.searchService
      .methodsGet(this.url, {
        pageSize: $event.pageSize,
        [this.nameInput]: this.productSearch,
        page: $event.pageIndex + 1,
        ...filters
      }).subscribe(
        {
          next: (response: any) => {
            this.isLoading.emit(false);
            this.data.emit(response);
            if (this.canModifyBarSearch) {
              const queryParams: Params = {
                page: $event.pageIndex + 1,
                pageSize: $event.pageSize,
                search: this.productSearch,
              };
              this.router.navigate([], {
                relativeTo: this.activeRoute,
                queryParams: queryParams,
                replaceUrl: true,
              });
            }
          },
          error: (err) => {
            console.log(err);
            this.isLoading.emit(false);
          }
        }
      );
  }

  searchBarReset() {
    this.pageEvent = {
      length: 0,
      pageIndex: 0,
      pageSize: this.pageEvent.pageSize,
    };
    this.searchBar(this.pageEvent);
  }

  filterWithNotNull(): object {
    const filter_data: any = {};
    Object.keys(this.filterData).forEach((key) => {
      if (this.filterData[key] !== null && this.filterData[key] !== '' && this.filterData[key] !== 0) {
        filter_data[key] = this.filterData[key];
      }
    });
    return filter_data;
  }

  // positionDropdown(): void {
  //   const positionDropdown = this.dropdown.nativeElement.getBoundingClientRect();
  //   // const widthDropdown = this.dropdown.nativeElement.offsetWidth;
  //   const widthDropdown = this.widthDropdown;
  //   console.log({positionDropdown});
  //   console.log({widthDropdown});
  //   if (positionDropdown.x < 0) {
  //     // this.dropdown.nativeElement.style.transform = `translateX(${Math.abs(positionDropdown.x/2)}px)`;
  //     this.dropdown.nativeElement.classList.add('left-fz');
  //     this.dropdown.nativeElement.classList.remove('right-fz');
  //     return;
  //   }
  //   const widthViewport = window.innerWidth;
  //   if (positionDropdown.x + widthDropdown > widthViewport) {
  //     // this.dropdown.nativeElement.style.transform = `translateX(${-Math.abs((positionDropdown.x) - widthViewport)}px)`;
  //     // this.dropdown.nativeElement.style.left = '100%';
  //     this.dropdown.nativeElement.classList.add('right-fz');
  //     this.dropdown.nativeElement.classList.remove('left-fz');
  //   }
  // }


  repositionDropdown(): void {
    const elemBtn = this.btnFilter.nativeElement as HTMLElement;
    const btnFilter = elemBtn.getBoundingClientRect();
    const windowHeight = window.innerHeight / 2;
    const windowWidth = window.innerWidth / 2;
    //When user click on bottom-left part of window
    if (btnFilter.y > windowHeight && btnFilter.x <= windowWidth) {
      this.dropdown.nativeElement.style.left = btnFilter.x
      this.dropdown.nativeElement.style.bottom = window.innerHeight - btnFilter.y
      this.dropdown.nativeElement.style.right = "auto"
      this.dropdown.nativeElement.style.top = "auto"
    } else if (btnFilter.y > windowHeight && btnFilter.x > windowWidth) {
      //When user click on bottom-right part of window
      this.dropdown.nativeElement.style.right = window.innerWidth - btnFilter.x
      this.dropdown.nativeElement.style.bottom = window.innerHeight - btnFilter.y
      this.dropdown.nativeElement.style.left = "auto"
      this.dropdown.nativeElement.style.top = "auto"
    } else if (btnFilter.y <= windowHeight && btnFilter.x <= windowWidth) {
      //When user click on top-left part of window
      this.dropdown.nativeElement.style.left = btnFilter.x
      this.dropdown.nativeElement.style.top = btnFilter.y
      this.dropdown.nativeElement.style.right = "auto"
      this.dropdown.nativeElement.style.bottom = "auto"
    } else {
      //When user click on top-right part of window
      this.dropdown.nativeElement.style.right = (window.innerWidth - btnFilter.x - elemBtn.clientWidth) + "px"
      this.dropdown.nativeElement.style.top = (btnFilter.y + (elemBtn.clientHeight /2) + 3) + "px"
      this.dropdown.nativeElement.style.left = "auto"
      this.dropdown.nativeElement.style.bottom = "auto"
      console.log('el ultimo', (btnFilter.y) + "px")
    }
  }


}

interface PageEvent {
  /** The current page index. */
  /** The current page index. */
  pageIndex: number;
  /**
   * Index of the page that was selected previously.
   * @breaking-change 8.0.0 To be made into a required property.
   */
  previousPageIndex?: number;
  /** The current page size */
  pageSize: number;
  /** The current total number of items being paged */
  length: number;
}
