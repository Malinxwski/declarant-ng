import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCategorySelectorComponent } from './news-category-selector.component';

describe('NewsCategorySelectorComponent', () => {
  let component: NewsCategorySelectorComponent;
  let fixture: ComponentFixture<NewsCategorySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCategorySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCategorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
