import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDetailViewComponent } from './station-detail-view.component';

describe('StationDetailViewComponent', () => {
  let component: StationDetailViewComponent;
  let fixture: ComponentFixture<StationDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
