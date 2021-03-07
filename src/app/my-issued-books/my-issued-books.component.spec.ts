import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIssuedBooksComponent } from './my-issued-books.component';

describe('MyIssuedBooksComponent', () => {
  let component: MyIssuedBooksComponent;
  let fixture: ComponentFixture<MyIssuedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyIssuedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIssuedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
