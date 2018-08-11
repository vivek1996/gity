import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  filter
} from 'rxjs/operators';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public dataSource;
  searchField: FormControl = new FormControl();
  displayList = 'hhjj';
  selected: string;
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
  constructor(private _http: ApiService) {}

  ngOnInit() {
    this.searchField.valueChanges
      .pipe(
        filter(value => !value || value.length > 2 || value !== ''),
        debounceTime(300),
        distinctUntilChanged(),
        // filter(value => value !== ''),
        switchMap(
          query =>
            query.length > 2
              ? this._http.searchUser(query)
              : (this.displayList = '')
        )
      )
      .subscribe(
        data => {
          const temp: any = data;
          this.dataSource = temp['items'].map(obj => obj.login);
          console.log(this.dataSource);
        },
        error => {
          console.log(error);
        }
      );
  }
  btnClick(value) {
    const letters = /^[A-Za-z ]*$/;
    const regRes = value.match(letters);
    if (regRes === null || value === '') {
      alert('Please Enter a word');
    } else {
      this._http.getUser(value).subscribe(
        data => {
          const temp: any = data;
          this.dataSource = temp['items'].map(obj => obj.login);
          console.log(this.dataSource);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
