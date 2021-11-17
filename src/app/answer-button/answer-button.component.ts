import { Component, Input, OnInit, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})
export class AnswerButtonComponent{

  constructor() { }

  @Input() answer: string | undefined
  @Output() buttonSelected: EventEmitter<any> = new EventEmitter()

  selectAnswer(){
    this.buttonSelected?.emit(this.answer)
  }

}