import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertifyEmailComponent } from './vertify-email.component';

describe('VertifyEmailComponent', () => {
  let component: VertifyEmailComponent;
  let fixture: ComponentFixture<VertifyEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VertifyEmailComponent]
    });
    fixture = TestBed.createComponent(VertifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
