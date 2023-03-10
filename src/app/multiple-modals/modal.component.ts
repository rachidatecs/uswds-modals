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

  @Input('triggerButtonText') public triggerButtonText:String;
  @Input('triggerButtonHidden') public triggerButtonHidden:boolean;
  @Input('triggerButtonClass') public triggerButtonClass:String;
  @Input('modalName') public modalName:String;
  @Input('modalHeader') public modalHeader:String;

  @ViewChild('modalTrigger', {static: false}) modalTrigger: ElementRef;
  @ViewChild('modalClose', {static: false}) modalClose: ElementRef;

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
