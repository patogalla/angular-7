import { Injectable } from '@angular/core';
import {Response} from '@angular/http';

import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from '../../utils/model';
import {PatogallaHttpService} from '../../utils/services/cn-http.service';

@Injectable()
export class AdminUserService {

  constructor(private http: PatogallaHttpService) {
  }

  /**
  POST /api/admin/user
  {
    "email": "test@test.com",
    "password": "New1New1",
    "userName": "New1New1",
    "firstName": "New1New1",
    "lastName": "New1New1",
    "phone": "New1New1",
    "role": 3
  }
  */
  saveUser(user: User): Observable<any> {
    return this.http.postWithAuth(`${environment.apiBaseUrl}/api/admin/user`, JSON.stringify(user));
  }

  /**
  GET /api/admin/user
  */
  getAll(): Observable<any> {
    return this.http.getWithAuth(`${environment.apiBaseUrl}/api/admin/user`);
  }

  /**
  GET /api/admin/user/id
  */
  get(id: string): Observable<any> {

    return this.http.getWithAuth(`${environment.apiBaseUrl}/api/admin/user/` + id);
  }

  /**
  DELETE /api/admin/user
  */
  delete(id:string): Observable<any> {
    return this.http.deleteWithAuth(`${environment.apiBaseUrl}/api/admin/user/` + id);
  }

  /**
  DELETE /api/admin/user
  */
  updateUser(id:string, user:User): Observable<any> {
    return this.http.patchWithAuth(`${environment.apiBaseUrl}/api/admin/user/` + id, JSON.stringify(user));
  }

}
