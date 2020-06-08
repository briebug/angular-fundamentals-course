import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@bba/material';
import { LoginComponent } from './login.component';
import { AuthService } from '@bba/core-data';

const authServiceMock = {
  login: (email, password) => email === 'valid@email.com' && password === 'password'
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceMock }
      ],
      imports: [
        FormsModule,
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    authService = de.injector.get(AuthService);
    fixture.detectChanges();
  });

  it('should call auth service with the right parameters', () => {
    const goodEmail = 'valid@email.com';
    const goodPassword = 'password';

    spyOn(authService, 'login').and.callThrough();
    component.login(goodEmail, goodPassword);
    expect(authService.login).toHaveBeenCalledWith(goodEmail, goodPassword);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init with submit button disabled', () => {
    const btn = de.query(By.css('button')).nativeElement;
    fixture.detectChanges();
    expect(btn.disabled).toBeTruthy();
  });

  it('should update the title', () => {
    const title = de.query(By.css('.mat-card-title')).nativeElement;
    const newTitle = 'Updated title!';
    component.title = newTitle;
    fixture.detectChanges();
    expect(title.textContent).toContain(newTitle);
  });

  it('should enable submit button if valid', () => {
    const btn = de.query(By.css('button')).nativeElement;
    const email = de.query(By.css('input[name=email]')).nativeElement;
    const password = de.query(By.css('input[name=password]')).nativeElement;
    email.value = 'test@test.com';
    password.value = '01234567890';
    email.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));

    expect(btn.disabled).toBe(false);
  });

  it('should have the proper title', () => {
    expect(component.title).toBe('Login');
  });
});
