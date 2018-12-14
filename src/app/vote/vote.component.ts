import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  totalVote =0;

  constructor() { }

  upvote(){
    this.totalVote= this.totalVote+1
  }
  downvote(){
    this.totalVote= this.totalVote-1
  }
  ngOnInit() {
  }

}
