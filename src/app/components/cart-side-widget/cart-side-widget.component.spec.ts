import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSideWidgetComponent } from './cart-side-widget.component';

describe('CartSideWidgetComponent', () => {
  let component: CartSideWidgetComponent;
  let fixture: ComponentFixture<CartSideWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSideWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSideWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
