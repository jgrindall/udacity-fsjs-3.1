import { Injectable } from '@angular/core';
import {Post} from "./types";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }


  getUsingService(): Observable<[]> {
    return this.http.get<[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getAll():Post[]{
    return [
      {
        title: "t0",
        id: 0,
        comments: ["great", "ok"],
        show:true
      },
      {
        title: "t1",
        id: 1,
        comments: ["great", "ok"],
        show:true
      },
      {
        title: "t2",
        id: 2,
        comments: ["great", "ok"],
        show:true
      },
      {
        title: "t3",
        id: 3,
        comments: ["great", "ok"],
        show:true
      }
    ];
  }
}
