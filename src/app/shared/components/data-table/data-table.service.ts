import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {SortDirection} from './sortable.directive';
import {switchMap, tap} from 'rxjs/operators';

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: String;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  inputData = [];
  private _search$ = new Subject<void>();
  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor() { }

  private _loading$ = new BehaviorSubject<boolean>(true);

  get loading$() {
    return this._loading$.asObservable();
  }

  private _countries$ = new BehaviorSubject<any>([]);

  get countries$() {
    return this._countries$.asObservable();
  }

  private _total$ = new BehaviorSubject<number>(0);

  get total$() {
    return this._total$.asObservable();
  }

  get page() {
    return this._state.page;
  }

  set page(page: number) {
    this._set({page});
  }

  get pageSize() {
    return this._state.pageSize;
  }

  set pageSize(pageSize: number) {
    this._set({pageSize});
  }

  get searchTerm() {
    return this._state.searchTerm;
  }

  set searchTerm(searchTerm: string) {
    this._set({searchTerm});
  }

  set sortColumn(sortColumn) {
    this._set({sortColumn});
  }

  set sortDirection(sortDirection: SortDirection) {
    this._set({sortDirection});
  }

  sort(data, column, direction: string) {
    if (direction === '' || column === '') {
      return data;
    } else {
      return [...data].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  matches(data, term: string) {
    if (term !== '') {
      let arr = Object.keys(data).map((item) => {
        if (data[item].hasOwnProperty('txt')) {
          return String(data[item].txt).includes(term)
        }else {
          return String(data[item]).includes(term)
        }
      });
      return (arr.includes(true));
    } else {
      return true;
    }
  }

  initiate() {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      switchMap(() => this._search()),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._countries$.next(result.countries);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<any> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    let countries = this.sort(this.inputData, sortColumn, sortDirection);
    // 2. filter
    countries = countries.filter(item => this.matches(item, searchTerm));
    const total = countries.length;
    // 3. paginate
    countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({countries, total});
  }
}
