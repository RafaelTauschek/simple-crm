import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { DialogAddTaskComponent } from '../dialog-add-task/dialog-add-task.component';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent {

  constructor(private dialog: MatDialog, private firebase: Firestore) {}

  openDialog() {
    this.dialog.open(DialogAddTaskComponent);
  }
}
