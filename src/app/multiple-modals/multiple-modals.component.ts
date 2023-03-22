import { Component, OnInit } from '@angular/core';

//@ts-ignore
import modal from "@uswds/uswds/js/usa-modal";

@Component({
  selector: 'app-multiple-modals',
  templateUrl: './multiple-modals.component.html',
  styleUrls: ['./multiple-modals.component.less']
})
export class MultipleModalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    modal.on();
  }

  ngOnDestroy() {
    modal.off();
  }

}
