import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilterObjectComponent } from './custom-filter-object.component';

describe('CustomFilterObjectComponent', () => {
  let component: CustomFilterObjectComponent;
  let fixture: ComponentFixture<CustomFilterObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFilterObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFilterObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
