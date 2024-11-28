import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RegistroPage } from './registro.page';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPage], 
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Crear', () => {
    expect(component).toBeTruthy();
  });

  it('Fomulario de registro', () => {
    const compiled = fixture.nativeElement;
    const formElement = compiled.querySelector('form');

    expect(formElement).toBeTruthy();
    
  });

  

  afterEach(() => {
    fixture.destroy();
  });
});

