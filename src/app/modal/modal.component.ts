import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

//@ts-ignore
import modal from "@uswds/uswds/js/usa-modal";
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  @Input('triggerButtonText') public triggerButtonText:String | undefined;
  @Input('triggerButtonClass') public triggerButtonClass:String | undefined;
  @Input('modalName') public modalName:String | undefined;
  @Input('modalHeader') public modalHeader:String | undefined;

  _destroyed$ = new Subject<boolean>();
  
  constructor() { 
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    modal.on();
  }

  ngOnDestroy() {
    modal.off();
  }


}
