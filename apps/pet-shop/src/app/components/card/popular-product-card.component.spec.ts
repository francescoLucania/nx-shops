import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopularProductCardComponent } from './popular-product-card.component';

describe('CardComponent', () => {
  let component: PopularProductCardComponent;
  let fixture: ComponentFixture<PopularProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
