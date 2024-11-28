import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReestablecerPage } from './reestablecer.page';

describe('ReestablecerPage', () => {
  let component: ReestablecerPage;
  let fixture: ComponentFixture<ReestablecerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReestablecerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
