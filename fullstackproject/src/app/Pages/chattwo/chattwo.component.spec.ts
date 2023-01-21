import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattwoComponent } from './chattwo.component';

describe('ChattwoComponent', () => {
  let component: ChattwoComponent;
  let fixture: ComponentFixture<ChattwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChattwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChattwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
