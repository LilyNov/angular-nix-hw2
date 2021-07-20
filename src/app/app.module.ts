import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from "./app.component";
import {PostsService} from './posts.service'
import {PostListComponent} from "./post-list/postList.component"

@NgModule({
  declarations: [AppComponent, PostListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
