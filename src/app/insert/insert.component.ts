import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent {
  @Output() onSubmitEvent = new EventEmitter<any>();

  @Input() submitLabel: string;
  task = new FormControl('',[Validators.required]);
  description = new FormControl('');
  getTaskErrorMessage() {
    if(this.task.hasError('required')) {
      return 'You must enter a task';
    }
    return '';
  }
  onSubmit() {
    this.onSubmitEvent.emit({
      task: this.task.value,
      description: this.description.value,
    })
  }
}
