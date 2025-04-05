import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPopularesComponent } from './tv-populares.component';

describe('TvPopularesComponent', () => {
  let component: TvPopularesComponent;
  let fixture: ComponentFixture<TvPopularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvPopularesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
