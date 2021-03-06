import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoListService.addItem({ title });
  }

  updateItem(item: TodoItem, changes: object) {
    this.todoListService.updateItem(item, changes);
  }

  removeItem(item: TodoItem) {
    this.todoListService.deleteItem(item);
  }

}
