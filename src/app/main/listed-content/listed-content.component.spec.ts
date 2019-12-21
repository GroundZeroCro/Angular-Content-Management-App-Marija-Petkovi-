import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedContentComponent } from './listed-content.component';

describe('ListedContentComponent', () => {
  let component: ListedContentComponent;
  let fixture: ComponentFixture<ListedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
