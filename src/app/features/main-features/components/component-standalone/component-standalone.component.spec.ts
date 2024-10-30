import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStandaloneComponent } from './component-standalone.component';

describe('ComponentStandaloneComponent', () => {
  let component: ComponentStandaloneComponent;
  let fixture: ComponentFixture<ComponentStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
