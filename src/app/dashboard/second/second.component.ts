import {AfterViewInit, Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {SecondService} from "./second.service";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatPaginator, MatPaginatorIntl, PageEvent} from "@angular/material/paginator";
import {Subject} from "rxjs";
import {MatSort} from '@angular/material/sort';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = `First page`;
  itemsPerPageLabel = `Items per page:`;
  lastPageLabel = `Last page`;

  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  }
}

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})

export class SecondComponent implements OnInit, AfterViewInit {
  // @ViewChild('table1') table: MatTable<any> | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | undefined;

  displayedColumns: string[] = ['name', 'birth_year', 'created', 'edited'];
  dataSource: MatTableDataSource<any> | any;

  constructor(private secondService: SecondService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.secondService.getPeopleFromSwapi().subscribe(res => {
      const result = res.results;
      let arr: any[] = [];
      result.forEach((el: any) => {
        const obj = {
          name: el.name,
          birth_year: el.birth_year,
          created: el.created,
          edited: el.edited,
        };
        arr.push(obj);
      });
      this.dataSource = new MatTableDataSource<any>(arr);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
