import {Inject, Injectable, Optional} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, Subscription, switchMap, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG, IApiConfig} from "../tokens";


export interface IUser {
  id: string,
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

  public get user(): IUser | null {
    return this._user$.getValue();
  }

  public get isLoggedIn(): boolean {
    return this._user$.getValue() !== null;
  }

  public get authMethods(): null | IAuthMethod[] {
    return this._authMethods$.getValue();
  }
  public get userAge(): number | undefined {
    return Number((this._user$.getValue() as IUser)?.age);
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
    this.http.get<IAuthMethod[]>(`${this.apiBaseUrl}api/auth`)
      .subscribe({
        next: ( response: IAuthMethod[]) => {
          this._authMethods$.next(response);
        }
      })
  }

  public save(name: string): Observable<any> {
    return this.http.post<IUser>(`${this.apiBaseUrl}api/user`, {name: name})
      .pipe(
        switchMap(() => this.getUser())
      )
  }

  public logout(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}api/auth/logout`).pipe(
      // catchError(()=> {
      //   return of(null)
      // }),
      switchMap(() => this.getUser())
    )
  }

  public getUser(): Observable<IUser | null> {
    return this.http.get<IUser>(`${this.apiBaseUrl}api/user`)
    // return this.http.get('./assets/data/user.json')
      .pipe(
        map((data: any) => {
          const value = data?.id ? data : null;
          this._user$.next(value);
          return value;
        })
      )
  }
}
