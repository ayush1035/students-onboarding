import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('should get logged in',()=>{
    const service: LoginService = TestBed.get(LoginService);
    service.verifyUser({username:'abc',password:'defr'});
    expect(localStorage.getItem('username')).toBe('abc');
  })
});
