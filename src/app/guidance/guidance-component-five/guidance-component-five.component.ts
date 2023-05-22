import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-guidance-component-five',
  templateUrl: './guidance-component-five.component.html',
  styleUrls: ['./guidance-component-five.component.scss']
})
export class GuidanceComponentFiveComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }
}
