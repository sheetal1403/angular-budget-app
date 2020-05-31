import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete:EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {

  }

  deleteItem(item: BudgetItem){
    this.delete.emit(item);
    // this.budgetItems.splice(i,1)
  }

}
