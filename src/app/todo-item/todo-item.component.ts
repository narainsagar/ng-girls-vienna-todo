import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  isEditing = false;
  newTitle: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.newTitle = new FormControl(this.item.title);
  }

  // put this method below ngOnInit
  completeItem() {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }

  editItem() {
    if (this.isEditing) {
      this.update.emit({
        item: this.item,
        changes: { title: this.newTitle.value }
      });
      this.isEditing = false;
    } else {
      this.isEditing = true;
    }
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
