import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSearchBarFzComponent } from './ngx-search-bar-fz.component';

describe('SearchBarFzComponent', () => {
  let component: NgxSearchBarFzComponent;
  let fixture: ComponentFixture<NgxSearchBarFzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSearchBarFzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSearchBarFzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
