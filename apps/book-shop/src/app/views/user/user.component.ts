import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  Validators
} from "@angular/forms";
import {IUser, LoginModalComponent, UserService} from "@nx-shops/lib";
import {BaseModalComponent, ButtonModule, InputModule, ModalModule, ModalService} from "ngx-neo-ui";
import {finalize, pipe} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'book-shop-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalModule, ReactiveFormsModule, InputModule, ButtonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public form: FormGroup;
  public editState = false;
  public loading = false;
  public get user(): IUser | null {
    return this.userService.user;
  };

  public get login(): UntypedFormControl {
    return this.form?.get('login') as UntypedFormControl;
  }

  public get userAge(): UntypedFormControl {
    return this.form?.get('age') as UntypedFormControl;
  }

  public get userId(): UntypedFormControl {
    return this.form?.get('id') as UntypedFormControl;
  }

  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {

    this.userService.user$.subscribe({
      next: (user) => {
        if (user) {
          this.userId.patchValue(user.id);
          this.login.patchValue(user.name);
          this.userAge.patchValue(user.age);
        }
      }
    })

    this.form = new FormGroup({
      id: new FormControl((this.userService.user ? this.userService.user.id : null), Validators.required),
      login: new FormControl((this.userService.user ? this.userService.user.name : 'Guest'), Validators.required),
      age: new FormControl(this.userService.user ? this.userService.user.age : 'Отсутствует'),
    })
  }

  public changeState(): void {
    this.editState = !this.editState;
  }

  public save() {
    this.loading = true;
    const login = this.login?.value;
    if (login?.length) {
      this.userService.save(login)
        .pipe(finalize(() => {
          this.editState = false;
          this.loading = false;
        }))
        .subscribe({
        error: () => {
          this.initForm();
          this.modalService.open(BaseModalComponent, undefined, {
            title: 'Возникла ошибка, попробуйте позже',
          });
        }
        });
    }
  }

  public logout(): void {
    this.userService.logout().subscribe(
      {
      next: () => this.router.navigate(['/'])
      }
    )
  }
}
