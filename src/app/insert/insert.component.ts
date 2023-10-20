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

  onSubmit() {
    this.onSubmitEvent.emit({
      task: this.task.value,
      description: this.description.value,
    })
  }
}
