import { TestBed } from '@angular/core/testing';

import { ConfigformService } from './configform.service';
import personData from './../../../../assets/json/form/person.json';
import personFiltersData from '../../../../assets/json/filters/person.json';

describe('ConfigformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let name='person';
  let filterperson=personFiltersData;
  let person= personData;

  it('should be created', () => {
    const service: ConfigformService = TestBed.get(ConfigformService);
    expect(service).toBeTruthy();
  });
  it('Test function getFiltersForm empty', () => {
    const service: ConfigformService = TestBed.get(ConfigformService);
    expect(service.getFiltersForm('')).toEqual([]);
  });
  it('Test function getFiltersForm person', () => {
    const service: ConfigformService = TestBed.get(ConfigformService);
    expect(service.getFiltersForm(name)).toEqual(filterperson);
  });
  it('Test function getConfigForm empty', () => {
    const service: ConfigformService = TestBed.get(ConfigformService);
    expect(service.getConfigForm('')).toEqual([]);
  });
  it('Test function getConfigForm person', () => {
    const service: ConfigformService = TestBed.get(ConfigformService);
    expect(service.getConfigForm(name)).toEqual(person);
  });
});
