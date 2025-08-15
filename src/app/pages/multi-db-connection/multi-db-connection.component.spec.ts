import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiDbConnectionComponent } from './multi-db-connection.component';

describe('MultiDbConnectionComponent', () => {
  let component: MultiDbConnectionComponent;
  let fixture: ComponentFixture<MultiDbConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiDbConnectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiDbConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
