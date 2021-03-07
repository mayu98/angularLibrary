import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAvailableBooksComponent } from './show-available-books.component';

describe('ShowAvailableBooksComponent', () => {
  let component: ShowAvailableBooksComponent;
  let fixture: ComponentFixture<ShowAvailableBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAvailableBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAvailableBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
