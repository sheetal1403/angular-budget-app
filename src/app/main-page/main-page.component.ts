import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = [];

  totalAmount:number = 0

  constructor() { }

  ngOnInit(): void {


  }

  addItem(budgetItem: BudgetItem){
    this.budgetItems.push(budgetItem);
    this.totalAmount += budgetItem.amount
  }

  deleteItem(item: BudgetItem){
    let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index,1);
    this.totalAmount -= item.amount
  }

}
