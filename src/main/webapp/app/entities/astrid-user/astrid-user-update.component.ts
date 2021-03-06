import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IAstridUser, AstridUser } from 'app/shared/model/astrid-user.model';
import { AstridUserService } from './astrid-user.service';
import { IUser } from 'app/core/user/user.model';
import { UserService } from 'app/core/user/user.service';

@Component({
  selector: 'jhi-astrid-user-update',
  templateUrl: './astrid-user-update.component.html',
})
export class AstridUserUpdateComponent implements OnInit {
  isSaving = false;
  users: IUser[] = [];

  editForm = this.fb.group({
    id: [],
    phoneNumber: [null, [Validators.required, Validators.pattern('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$')]],
    userId: [],
  });

  constructor(
    protected astridUserService: AstridUserService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ astridUser }) => {
      this.updateForm(astridUser);

      this.userService.query().subscribe((res: HttpResponse<IUser[]>) => (this.users = res.body || []));
    });
  }

  updateForm(astridUser: IAstridUser): void {
    this.editForm.patchValue({
      id: astridUser.id,
      phoneNumber: astridUser.phoneNumber,
      userId: astridUser.userId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const astridUser = this.createFromForm();
    if (astridUser.id !== undefined) {
      this.subscribeToSaveResponse(this.astridUserService.update(astridUser));
    } else {
      this.subscribeToSaveResponse(this.astridUserService.create(astridUser));
    }
  }

  private createFromForm(): IAstridUser {
    return {
      ...new AstridUser(),
      id: this.editForm.get(['id'])!.value,
      phoneNumber: this.editForm.get(['phoneNumber'])!.value,
      userId: this.editForm.get(['userId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAstridUser>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: IUser): any {
    return item.id;
  }
}
