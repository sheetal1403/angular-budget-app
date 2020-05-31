import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import  { NgForm } from '@angular/forms'
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @ViewChild('itemForm') itemForm;
  @Input() item: BudgetItem = new BudgetItem('', null);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    // console.log(form);
    const budgetItem = form.value;
    console.log(budgetItem);
    this.formSubmit.emit(budgetItem);
    form.reset();

  }

}
