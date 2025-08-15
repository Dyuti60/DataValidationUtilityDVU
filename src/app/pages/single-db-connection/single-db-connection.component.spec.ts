import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDbConnectionComponent } from './single-db-connection.component';

describe('SingleDbConnectionComponent', () => {
  let component: SingleDbConnectionComponent;
  let fixture: ComponentFixture<SingleDbConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDbConnectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDbConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
