import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePedidosComponent } from './service-pedidos.component';

describe('ServicePedidosComponent', () => {
  let component: ServicePedidosComponent;
  let fixture: ComponentFixture<ServicePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicePedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
