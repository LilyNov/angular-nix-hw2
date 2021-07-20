import {Component, OnInit} from "@angular/core"
import { PostsService } from '../posts.service'
import {IPost} from '../post'


@Component({
  selector: 'posts-list',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css']
})


export class PostListComponent implements OnInit {

 public posts: IPost[] = []
  
  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getData()
      .subscribe(data => this.posts = data);
  }



}