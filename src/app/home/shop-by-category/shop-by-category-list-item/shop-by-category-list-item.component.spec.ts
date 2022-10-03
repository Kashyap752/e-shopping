import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByCategoryListItemComponent } from './shop-by-category-list-item.component';

describe('ShopByCategoryListItemComponent', () => {
  let component: ShopByCategoryListItemComponent;
  let fixture: ComponentFixture<ShopByCategoryListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopByCategoryListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByCategoryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
