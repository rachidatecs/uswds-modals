import { Component, OnInit } from '@angular/core';

//@ts-ignore
import modal from "@uswds/uswds/js/usa-modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = '5062-modal-inits';

  ngAfterViewInit() {
    modal.on();
  }

  ngOnDestroy() {
    modal.off();
  }
}
