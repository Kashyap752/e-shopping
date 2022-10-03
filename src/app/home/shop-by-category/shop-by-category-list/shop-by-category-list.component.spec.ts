import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByCategoryListComponent } from './shop-by-category-list.component';

describe('ShopByCategoryListComponent', () => {
  let component: ShopByCategoryListComponent;
  let fixture: ComponentFixture<ShopByCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopByCategoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopByCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
