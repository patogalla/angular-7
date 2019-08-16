import { Injectable } from "@angular/core";
import { User } from 'src/app/utils/model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PatogallaHttpService } from 'src/app/utils/services';

@Injectable()
export class UserService {

    
    constructor(private http:PatogallaHttpService){}

     /**
  POST /api/register
  {
    "email": "test@test.com",
    "password": "New1New1",
    "userName": "New1New1",
    "firstName": "New1New1",
    "lastName": "New1New1",
    "phone": "New1New1"
  }
  */
  register(user: User): Observable<any> {
    return this.http.postWithAuth(`${environment.apiBaseUrl}/api/register`, JSON.stringify(user));
  }

  /**
   * GET /api/myProfile
   * @param id 
   */
  getProfile (id: string):Observable<any>{
      return this.http.getWithAuth(`${environment.apiBaseUrl}/api/myProfile` + id);
  }

  /**
   * PATH /api/update
   * @param id 
   * @param user 
   */
  update (id: string , user:User) : Observable<any> {
      return this.http.patchWithAuth(`${environment.apiBaseUrl}/api/update`+ id, JSON.stringify(user));
  }
}