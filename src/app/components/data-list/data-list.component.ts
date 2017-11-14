import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'ast-data-list',
  template: `
    <h3>Search Data Returned</h3>
  `,
  encapsulation: ViewEncapsulation.None
})
export class DataListComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.GetSearchData();
  }

}
