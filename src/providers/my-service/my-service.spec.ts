import { TestBed, inject } from '@angular/core/testing';

import { MyServiceProvider } from './my-service';
import { HttpClientModule } from '@angular/common/http';

describe('MyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MyServiceProvider]
    });
  });

  it('should be created', inject([MyServiceProvider], (service: MyServiceProvider) => {
    expect(service).toBeTruthy();
  }));
});