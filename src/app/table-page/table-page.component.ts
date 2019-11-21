import { Component, OnInit } from "@angular/core";
import { TABLE } from "./table-data";

//import { DataTableDirective } from "angular-datatables";
// import { DataTablesModule } from 'angular-datatables';
// import "datatables.net-dt/css/jquery.dataTables.css";
// import "jquery/dist/jquery.js";
// import "datatables.net/js/jquery.dataTables.js";

// import * as $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-bs4';

@Component({
  selector: "app-table-page",
  templateUrl: "./table-page.component.html",
  styleUrls: ["./table-page.component.css"]
})
export class TablePageComponent implements OnInit {
  title = "CodeSandbox";
  menuList = TABLE;

  dataTable: any;
  // dtOptions: DataTables.Settings = {};
  // datatableElement: DataTableDirective;

  ngOnInit() {
    // this.dtOptions = {
    //   columns: [{
    //     title: '#',
    //     data: 'id'
    //   }, {
    //     title: 'Title',
    //     data: 'title'
    //   }, {
    //     title: 'Route',
    //     data: 'route'
    //   }]
    // };
    const uniqueArr = [...new Set(this.menuList.map(data => data.title))];
    console.log(uniqueArr);

    // var table = $('#table').DataTable();
    // console.log(table);
    // var filteredData = table
    //     .column( 0 )
    //     .data()
    //     .filter( function ( value, index ) {
    //         return value > 20 ? true : false;
    //     } );
    // console.log("hi" + filteredData[0].title);

    $(document).ready(function() {
      $("#example").DataTable({
        initComplete: function() {
          this.api()
            .columns(1)
            .every(function() {
              var column = this;
              var select = $(
                '<select class="custom-select"><option value=""></option></select>'
              )
                .appendTo($(column.footer()).empty())
                .on("change", function() {
                  var val = $.fn.dataTable.util.escapeRegex($(this).val());

                  column.search(val ? "^" + val + "$" : "", true, false).draw();
                });

              column
                .data()
                .unique()
                .sort()
                .each(function(d, j) {
                  select.append('<option value="' + d + '">' + d + "</option>");
                });
            });
        }
      });
    });
  }
}
