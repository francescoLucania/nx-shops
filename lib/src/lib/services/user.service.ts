import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {BehaviorSubject, catchError, Observable, of, Subscription, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG, IApiConfig} from "../tokens";


export interface IUser {
  name: string,
  surname: string,
  gender: 'male' | 'female',
  age: number;
}

export interface IAuthMethod {
  image: string,
  text: string,
  url: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBaseUrl = '';

  private _user$ = new BehaviorSubject<null | IUser>(null);
  public user$ = this._user$.asObservable();

  private _authMethods$ = new BehaviorSubject<null | IAuthMethod[]>(null);
  public authMethods$ = this._authMethods$.asObservable();

  public get isLoggedIn(): boolean {
    return this._user$.getValue() !== null;
  }

  public get authMethods(): null | IAuthMethod[] {
    return this._authMethods$.getValue();
  }
  public get isAdult(): boolean {
    return (this._user$.getValue() as IUser)?.age >= 18;
  }

  constructor(
    @Optional() @Inject(API_CONFIG) private apiConfig: IApiConfig,
    private http: HttpClient
  ) {
    if (apiConfig.apiBaseUrl) {
      this.apiBaseUrl = apiConfig.apiBaseUrl;
    }
    this.getAuthMethods();
  }

  private getAuthMethods(): void {
    this.http.get<IAuthMethod[]>(`${this.apiBaseUrl}/dummy_shop/api/auth`)
      .subscribe({
        next: ( response: IAuthMethod[]) => {
          console.log('response', response);
          this._authMethods$.next(response);
        }
      })
  }

  public getUser(): Observable<IUser | null> {
    return this.http.get<IUser>(`${this.apiBaseUrl}/api/user`)
      .pipe(
        tap((data: IUser) => this._user$.next(data))
      )
  }
}
