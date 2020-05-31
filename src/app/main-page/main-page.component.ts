import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = [];



  constructor() { }

  ngOnInit(): void {


  }

  addItem(budgetItem: BudgetItem){
    this.budgetItems.push(budgetItem);
  }

}
