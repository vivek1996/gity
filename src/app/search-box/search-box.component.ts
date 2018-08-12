import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  protected searchStr: string;
  protected dataService: CompleterData;
  constructor(private completerService: CompleterService) {
    this.dataService = completerService.remote(null, 'login', 'login');
    this.dataService.urlFormater((term: any) => {
      return `https://api.github.com/search/users?q=${term}&per_page=10`;
    });
    this.dataService.dataField('items');
  }

  ngOnInit() {}
}
