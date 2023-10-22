import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataUpdateService {
  private taskId: number;
  private taskTitle: string;
  private taskDescription: string;
  setUpdate(id: number, title: string, description: string) {
    this.taskId = id;
    this.taskTitle = title;
    this.taskDescription = description;
  }
  getUpdateId() {
    return this.taskId;
  }
  getUpdateTitle() {
    return this.taskTitle;
  }
  getUpdateDescription() {
    return this.taskDescription;
  }
}
