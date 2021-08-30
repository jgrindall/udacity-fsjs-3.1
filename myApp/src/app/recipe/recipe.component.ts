import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../types";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  name: string = "lemonade";
  ingredients:string[] = ["lemon", "water", "sugar"];
  posts: Post[] = [];

  constructor() { }

  onHide(post:Post):void{
    post.show = false;
  }

  ngOnInit(): void {
    this.name = this.name + "!!";
    this.posts = [
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

  onClick(p:Post):void{
    alert("click");

    p.comments.push("WHAT");
  }

  getPosts():string{
    return JSON.stringify(this.posts);
  }

  ngOnDestroy(): void {
    // Component destruction code here
  }

}
