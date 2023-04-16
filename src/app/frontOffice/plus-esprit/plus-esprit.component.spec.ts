import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusEspritComponent } from './plus-esprit.component';

describe('PlusEspritComponent', () => {
  let component: PlusEspritComponent;
  let fixture: ComponentFixture<PlusEspritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusEspritComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusEspritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
