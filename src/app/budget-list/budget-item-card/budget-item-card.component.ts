import { Component, OnInit, Input, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Output() deleteItemEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() isIncome: boolean;
  @Input() item: BudgetItem;
  @Input() id: number;
  constructor() { }

  ngOnInit(): void {


  }

  deleteItem(){
    // console.log('From card '+ this.id)
    this.deleteItemEvent.emit();
  }

}
