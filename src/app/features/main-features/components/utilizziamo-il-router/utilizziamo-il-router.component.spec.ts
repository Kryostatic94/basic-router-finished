import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizziamoIlRouterComponent } from './utilizziamo-il-router.component';

describe('UtilizziamoIlRouterComponent', () => {
  let component: UtilizziamoIlRouterComponent;
  let fixture: ComponentFixture<UtilizziamoIlRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UtilizziamoIlRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilizziamoIlRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
