import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListearticletableComponent } from './listearticletable.component';

describe('ListearticletableComponent', () => {
  let component: ListearticletableComponent;
  let fixture: ComponentFixture<ListearticletableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListearticletableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListearticletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
