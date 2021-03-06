import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Observable } from 'rxjs/Observable';

import { OnboardingCreateWalletComponent } from './onboarding-create-wallet.component';
import { WalletService } from '../../../../services/wallet.service';
import { Wallet } from '../../../../app.datatypes';
import { OnboardingDisclaimerComponent } from './onboarding-disclaimer/onboarding-disclaimer.component';

class MockWalletService {
  all: Observable<Wallet[]> = Observable.of();
}

describe('OnboardingCreateWalletComponent', () => {
  let component: OnboardingCreateWalletComponent;
  let fixture: ComponentFixture<OnboardingCreateWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OnboardingCreateWalletComponent,
        OnboardingDisclaimerComponent
      ],
      imports: [
        MatDialogModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        FormBuilder,
        { provide: WalletService, useClass: MockWalletService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  }));

  beforeEach(() => {
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ OnboardingDisclaimerComponent ],
      }
    });

    fixture = TestBed.createComponent(OnboardingCreateWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
