import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIssuedBooksComponent } from './all-issued-books.component';

describe('AllIssuedBooksComponent', () => {
  let component: AllIssuedBooksComponent;
  let fixture: ComponentFixture<AllIssuedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllIssuedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIssuedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
