import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { VistaProfePage } from './vista-profe.page';
import { ApiService } from '../servicios/api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('VistaProfePage', () => {
  let component: VistaProfePage;
  let fixture: ComponentFixture<VistaProfePage>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async(() => {
    apiService = jasmine.createSpyObj('ApiService', ['obtenerClase', 'obtenerAlumno']);

    TestBed.configureTestingModule({
      declarations: [VistaProfePage],
      imports: [RouterTestingModule], 
      providers: [{ provide: ApiService, useValue: apiService }],
    }).compileComponents();

    fixture = TestBed.createComponent(VistaProfePage);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call obtenerClase on ngOnInit', () => {
    apiService.obtenerClase.and.returnValue(of());
    component.ngOnInit();

    expect(apiService.obtenerClase).toHaveBeenCalled();
  });
});