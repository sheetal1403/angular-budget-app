import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

export interface UpdateEvent{
  old: BudgetItem;
  new: BudgetItem;
}

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})



export class BudgetListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete:EventEmitter<any> = new EventEmitter<any>();
  @Output() totalAmountEvent:EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>()

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  deleteItem(item: BudgetItem){
    this.delete.emit(item);
    // this.budgetItems.splice(i,1)
  }

  onCardClick(item: BudgetItem){
    //show the edit modal
    const dailogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });

    dailogRef.afterClosed().subscribe(result => {
      if(result){
        // this.budgetItems[this.budgetItems.indexOf(item)] = result;
        // console.log('Result'+result.amount)
        this.totalAmountEvent.emit({old: item, new: result});
      }
    })

  }

}
