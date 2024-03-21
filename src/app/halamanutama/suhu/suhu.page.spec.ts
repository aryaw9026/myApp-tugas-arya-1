import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuhuPage } from './suhu.page';

describe('SuhuPage', () => {
  let component: SuhuPage;
  let fixture: ComponentFixture<SuhuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuhuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
