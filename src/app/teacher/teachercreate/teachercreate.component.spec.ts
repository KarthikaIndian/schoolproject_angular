import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachercreateComponent } from './teachercreate.component';

describe('TeachercreateComponent', () => {
  let component: TeachercreateComponent;
  let fixture: ComponentFixture<TeachercreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachercreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
