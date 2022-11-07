import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPaginatorFzComponent } from './ngx-paginator-fz-component.component';

describe('PaginatorFzComponentComponent', () => {
  let component: NgxPaginatorFzComponent;
  let fixture: ComponentFixture<NgxPaginatorFzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPaginatorFzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPaginatorFzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
