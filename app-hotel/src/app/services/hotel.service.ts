import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Hotel } from '../class/hotel';
import { environment } from '../../environments/environment';
@Injectable()
export class HotelService {

  constructor(private http: Http) { }

  public getall(): Observable<Hotel[]> {
    return this.http.get(environment.CONS_API_HOTEL).map(this.extractData).catch(this.handleError);
  }

  public findByNameAndStars(name: string, stars: Number[]): Observable<Hotel[]> {
    const query = {
      name, stars
    }
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(environment.CONS_API_HOTEL + "search", query, options).map(this.extractData).catch(this.handleError);
  }

  private extractData(res) {
    const body = res.json();
    return body || [];
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
