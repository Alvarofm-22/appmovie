import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPopularComponent } from './lista-popular.component';

describe('ListaPopularComponent', () => {
  let component: ListaPopularComponent;
  let fixture: ComponentFixture<ListaPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPopularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
