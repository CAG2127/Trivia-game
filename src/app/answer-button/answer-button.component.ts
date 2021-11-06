import { Component, Input, OnInit, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})
export class AnswerButtonComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit ejecutado") 
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges ejecutado", changes) 
   }

  @Input() answer: string | undefined
  @Output() buttonSelected: EventEmitter<any> = new EventEmitter()

  variableCualquiera= 0
  selectAnswer(){
    this.buttonSelected?.emit(this.answer)
    this.variableCualquiera++

  }
  
  
}
