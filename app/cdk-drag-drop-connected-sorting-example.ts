import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {
  col1 = [
    {value: 1, disabled: false},
    {value: 2, disabled: false},
    {value: 3, disabled: false},
  ];

  col2 = [
    {value: 4, disabled: false},
    {value: 5, disabled: false},
    {value: 6, disabled: false},
  ];

  col3 = [
    {value: 7, disabled: false},
    {value: 8, disabled: false},
    {value: '', disabled: true},
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      transferArrayItem(event.container.data,
                        event.previousContainer.data,
                        event.currentIndex+1,
                        event.previousIndex);
    }
  }
}
