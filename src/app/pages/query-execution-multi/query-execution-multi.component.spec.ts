import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryExecutionMultiComponent } from './query-execution-multi.component';

describe('QueryExecutionMultiComponent', () => {
  let component: QueryExecutionMultiComponent;
  let fixture: ComponentFixture<QueryExecutionMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryExecutionMultiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryExecutionMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
