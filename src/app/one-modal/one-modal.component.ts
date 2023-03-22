import { Component, OnInit } from '@angular/core';

//@ts-ignore
import modal from "@uswds/uswds/js/usa-modal";

@Component({
  selector: 'app-one-modal',
  templateUrl: './one-modal.component.html',
  styleUrls: ['./one-modal.component.less']
})
export class OneModalComponent implements OnInit {

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
