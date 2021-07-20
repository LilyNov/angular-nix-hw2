import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {IPost} from './post';
import {Observable} from 'rxjs'

@Injectable()

export class PostsService {
private url: string = "https://jsonplaceholder.typicode.com/posts"

constructor(private http: HttpClient) { }

getData(): Observable<IPost[]>{
  return this.http.get<IPost[]>(this.url)
}

}