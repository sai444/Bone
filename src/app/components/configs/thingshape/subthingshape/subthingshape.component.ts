import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-subthingshape',
  templateUrl: './subthingshape.component.html',
  styleUrls: ['./subthingshape.component.scss']
})
export class SubthingshapeComponent implements OnInit {
  @Input()
  customTitle: string;
  constructor() {
    console.log('myCustomComponent');
  }

  ngOnInit(): void {

    console.log(this.customTitle);
  }

}
