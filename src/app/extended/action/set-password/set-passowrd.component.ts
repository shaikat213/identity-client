import { ResetPasswordInputDto } from './../../../proxy/input-dtos/models';
import { AccountService } from './../../../proxy/account.service';
import { IdentityUserDto } from '@abp/ng.identity';
import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Confirmation, ConfirmationService, getPasswordValidators, ToasterService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-set-passowrd',
  templateUrl: './set-passowrd.component.html',
  styleUrls: ['./set-passowrd.component.scss']
})
export class SetPassowrdComponent {
  passwordForm: FormGroup;
  isModalVisible: boolean;
  modalBusy = false;
  identityUser: IdentityUserDto;
  isInvalidPassword: boolean;

  constructor(
    protected fb: FormBuilder,
    private toaster: ToasterService,
    private accountService: AccountService,
    private injector: Injector,
    private confirmation: ConfirmationService
  ) {}

  setPassword(record: IdentityUserDto) {
    this.initForm();
    this.identityUser = record;
    this.isModalVisible = true;
    this.isInvalidPassword = false;
  }

  initForm() {
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, ...getPasswordValidators(this.injector)]]
    });
  }

  save() {
    if (!this.passwordForm.valid) {
      return;
    }

    this.confirmation
    .warn(`User <strong>${this.identityUser.userName}'s</strong> password will be reset.`, { key: '::AreYouSure', defaultValue: 'Are you sure?' })
    .subscribe((status: Confirmation.Status) => {
      if(status === 'confirm') {
        this.modalBusy = true;

        var inputDto: ResetPasswordInputDto = {
          userId: this.identityUser.id,
          newPassword: this.passwordForm.value.newPassword
        }

        this.accountService.resetPasswordByInputDto(inputDto).subscribe(() => {
          this.toaster.success('Password reset successfully.', 'Success');
          this.modalBusy = false;
          this.isModalVisible = false;
        },
        (error) => {
          this.modalBusy = false;
          this.toaster.success('Password reset failed.', 'Error');
          console.log(error);
        });
      } else {
        this.isModalVisible = false;
      }
    });
  }

  onKeyUp(event: any){
    var newPassword = event.target.value;
    if(newPassword !== ''){
      this.isInvalidPassword = !this.isValidPassword(newPassword) || newPassword.length < 6;
    } else {
      this.isInvalidPassword = false;
    }
  }

  isValidPassword(password: string): boolean {
    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

    if (!password || password.length === 0) {
      return true;
    }
    return pattern.test(password);
  }

  generateRandomPassword(): void {
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var specialCharecters = ['!','@','#','$','%','&','(',')'];
    var smallLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var capitalLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    var randNumber1 = numbers[Math.floor(Math.random() * numbers.length)];
    var randNumber2 = numbers[Math.floor(Math.random() * numbers.length)];
    var randSmallLetter1 = smallLetters[Math.floor(Math.random() * smallLetters.length)];
    var randSmallLetter2 = smallLetters[Math.floor(Math.random() * smallLetters.length)];
    var randCapitalLetters1 = capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
    var randCapitalLetters2 = capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
    var randSpecialCharecter1 = specialCharecters[Math.floor(Math.random() * specialCharecters.length)];
    var randSpecialCharecter2 = specialCharecters[Math.floor(Math.random() * specialCharecters.length)];

    var randPassword = `${randCapitalLetters1}${randSpecialCharecter1}${randNumber1}${randSmallLetter1}${randCapitalLetters2}${randNumber2}${randSmallLetter2}${randSpecialCharecter2}`;

    this.passwordForm.patchValue({
      newPassword: randPassword
    });

    this.isInvalidPassword = false;
  }
}
