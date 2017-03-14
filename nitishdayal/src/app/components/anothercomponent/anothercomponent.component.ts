import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-another',
  templateUrl: './anothercomponent.component.html',
  styleUrls: ['./anothercomponent.component.css']
})
export class AnotherComponentComponent implements OnInit {
  @Input()
  public name: string;
  @Input()
  public nav?: MdSidenav;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    return this.nav && this.nav.toggle();
  }

}
