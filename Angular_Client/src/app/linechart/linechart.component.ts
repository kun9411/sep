import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import {Color, ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

    public data_1 = [
        { date: new Date("2024-01-08"), kilometer: 5 },
        { date: new Date("2024-02-08"), kilometer: 8 },
        { date: new Date("2024-03-08"), kilometer: 12.5 },
        { date: new Date("2024-04-08"), kilometer: 15 },
        { date: new Date("2024-05-08"), kilometer: 10 },
        { date: new Date("2024-06-08"), kilometer: 25 },
        { date: new Date("2024-07-08"), kilometer: 27 },
        { date: new Date("2024-08-08"), kilometer: 11 },
        { date: new Date("2024-09-08"), kilometer: 20 },
        { date: new Date("2024-10-08"), kilometer: 17 },
        { date: new Date("2024-11-08"), kilometer: 19 },
        { date: new Date("2024-12-08"), kilometer: 9 }
    ];

    public data_2 = [
        { date: new Date("2024-01-08"), kilometer: 9 },
        { date: new Date("2024-02-08"), kilometer: 4 },
        { date: new Date("2024-03-08"), kilometer: 19.5 },
        { date: new Date("2024-04-08"), kilometer: 2 },
        { date: new Date("2024-05-08"), kilometer: 19 },
        { date: new Date("2024-06-08"), kilometer: 12 },
        { date: new Date("2024-07-08"), kilometer: 15 },
        { date: new Date("2024-08-08"), kilometer: 28 },
        { date: new Date("2024-09-08"), kilometer: 12 },
        { date: new Date("2024-10-08"), kilometer: 8 },
        { date: new Date("2024-11-08"), kilometer: 25 },
        { date: new Date("2024-12-08"), kilometer: 2 }
    ];

  constructor() { }

  ngOnInit(): void
  {

  }

}
