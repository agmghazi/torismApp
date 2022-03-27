import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Observable} from 'rxjs';
import {DataTableService} from './data-table.service';
import {SortableDirective} from './sortable.directive';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  data: Observable<any>;
  total$: Observable<number>;
  destoryComponent = false
  @ViewChild('dataTable') dataTable: ElementRef;
  isLoaded = false;
  @Input('data') inputData;
  @Input('headers') tableHeaders;
  @Output() outputHandler = new EventEmitter<any>();
  @Output() fn = new EventEmitter<any>();
  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  constructor(public service: DataTableService) {
  }

  ngOnInit() {
    this.service.inputData = this.inputData;
    this.data = this.service.countries$;
    this.total$ = this.service.total$;

    this.isLoaded = true;
    this.service.initiate();
  }

  onSort({column, direction}) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  returnZero() {
    return 0;
  }

  exportExcel() {
    let table_text = "<table border='2px'><tr>";
    table_text += `<tr><img src="../../../../assets/images/zakyLogo.png"></tr>`
    for (let j = 0; j < this.dataTable.nativeElement.rows.length; j++) {
      table_text = table_text + this.dataTable.nativeElement.rows[j].innerHTML + "</tr>";
    }

    table_text = table_text + "</table>";

    return window.open('data:application/vnd.ms-excel,' + encodeURIComponent(table_text));
  }


  sendToSearch(value) {
    this.service.searchTerm = value;
  }

  viewReport(addId, actionType, operationType, listId) {
    const event = [addId, operationType, actionType,listId];
    this.fn.emit(event);
  }
}
