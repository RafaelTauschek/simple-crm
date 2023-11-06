import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddProductComponent } from './dialog-add-product.component';

describe('DialogAddProductComponent', () => {
  let component: DialogAddProductComponent;
  let fixture: ComponentFixture<DialogAddProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddProductComponent]
    });
    fixture = TestBed.createComponent(DialogAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});