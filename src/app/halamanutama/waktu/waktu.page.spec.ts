import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaktuPage } from './waktu.page';

describe('WaktuPage', () => {
  let component: WaktuPage;
  let fixture: ComponentFixture<WaktuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WaktuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
