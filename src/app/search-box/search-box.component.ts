import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { CompleterService, CompleterData, RemoteData } from 'ng2-completer';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  protected searchStr: string;
  // protected captain: string;
   protected dataService: RemoteData;

  constructor(private completerService: CompleterService) {
    // this.dataService = completerService.remote(`https://api.github.com/search/users?q=vivek&per_page=10`, 'items.login', 'login');
    this.dataService = completerService.remote(null, 'login', 'login');
    this.dataService.urlFormater((term: any) => {
      return `https://api.github.com/search/users?q=${term}&per_page=5`;
    });
    this.dataService.dataField('items');
    // this.dataService.imageField("avatar_url");
  }

  ngOnInit() {}
}
