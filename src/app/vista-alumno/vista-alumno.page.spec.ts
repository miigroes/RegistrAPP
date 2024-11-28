import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { VistaAlumnoPage } from './vista-alumno.page';

describe('VistaAlumnoPage', () => {
  let component: VistaAlumnoPage;
  let fixture: ComponentFixture<VistaAlumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VistaAlumnoPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(VistaAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an ion-list', () => {
    const compiled = fixture.nativeElement;
    const ionListElement = compiled.querySelector('ion-list');

    expect(ionListElement).toBeTruthy();
  });
});
