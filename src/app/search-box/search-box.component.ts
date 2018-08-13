import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { CompleterService, CompleterData, RemoteData } from 'ng2-completer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchStr: string;

  dataService: RemoteData;

  constructor(
    private completerService: CompleterService,
    private router: Router
  ) {
    this.dataService = completerService.remote(null, 'login', 'login');
    this.dataService.urlFormater((term: any) => {
      return `https://api.github.com/search/users?q=${term}&per_page=5`;
    });
    this.dataService.dataField('items');
    // this.dataService.imageField("avatar_url");
  }

  ngOnInit() {}
  search() {
    // console.log(this.searchStr);
    if (this.searchStr === '' || this.searchStr.length < 2) {
      alert('Enter More than 3 characters');
    } else {
      this.router.navigate(['/search', this.searchStr]);
    }
  }
}
