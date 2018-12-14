import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import { DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser'

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let htmlElement : HTMLElement;
  let debugElement : DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('h1'))
    htmlElement = debugElement.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('should display initial number of votes', ()=>{
    const fixture = TestBed.createComponent(VoteComponent);
    expect(htmlElement.textContent).toBe('Vote:0')
})*/
  
  it('should increment by 1', ()=>{
    //arrage
    const initialVote = component.totalVote;

    component.upvote()
    fixture.detectChanges();
    const newVotes= component.totalVote
    expect(newVotes).toBeGreaterThan(initialVote)
  })

  it('should display the upvoted number', ()=>{

    component.upvote()
    fixture.detectChanges();
    expect(htmlElement.textContent).toBe('Votes:1')
  })
  it('should display the downvote number', ()=>{

    component.downvote()
    fixture.detectChanges();
    expect(htmlElement.textContent).toBe('Votes:-1')
  })
});
