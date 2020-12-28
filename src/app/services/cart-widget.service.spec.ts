import { TestBed } from '@angular/core/testing';

import { CartWidgetService } from './cart-widget.service';

describe('CartWidgetService', () => {
  let service: CartWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
