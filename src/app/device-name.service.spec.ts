import { TestBed } from '@angular/core/testing';

import { DeviceNameService } from './device-name.service';

describe('DeviceNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceNameService = TestBed.get(DeviceNameService);
    expect(service).toBeTruthy();
  });
});
