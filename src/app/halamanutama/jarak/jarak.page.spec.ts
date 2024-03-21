import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JarakPage } from './jarak.page';

describe('JarakPage', () => {
  let component: JarakPage;
  let fixture: ComponentFixture<JarakPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JarakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
