import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TourService {
  private apiUrl = 'http://localhost:3000/api/generate-itinerary';


  constructor(private http: HttpClient) { }
 generateItinerary(data: any) {
  return this.http.post<any>('http://localhost:3000/api/generate-itinerary', data);
}

}
