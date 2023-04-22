import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEditorComponent } from './name-editor.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('NameEditorComponent', () => {
  let component: NameEditorComponent;
  let fixture: ComponentFixture<NameEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameEditorComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(NameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
