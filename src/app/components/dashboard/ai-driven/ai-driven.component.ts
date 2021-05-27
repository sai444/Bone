import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ai-driven',
  templateUrl: './ai-driven.component.html',
  styleUrls: ['./ai-driven.component.scss']
})
export class AiDrivenComponent implements OnInit {
  selectedQuantityp  = 'SKF BNG';
  optionsp: string[] = ["SKF BNG"];
  options1: string[] = ["CHANNEL-5"];
  options: string[] = [ "SGB CH5","SPC (IR) CH5", "SPC (OR) CH5"];
  selectedQuantity = 'CHANNEL-5'
  selectedQuantitys = 'SGB CH5'
  constructor(public http: HttpClient, private fb: FormBuilder ) { }


  ngOnInit(): void {
  }
  onOptionsSelectedp(E){

  }

  onOptionsSelecteds(e){

  }
  onOptionsSelected(e){

  }

}
