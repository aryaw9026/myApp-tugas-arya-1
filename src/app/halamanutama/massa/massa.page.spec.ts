import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MassaPage } from './massa.page';

describe('MassaPage', () => {
  let component: MassaPage;
  let fixture: ComponentFixture<MassaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MassaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
