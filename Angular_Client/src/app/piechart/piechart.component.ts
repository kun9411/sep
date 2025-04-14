import {Component, OnInit} from '@angular/core';
import {StudentServiceService} from "../Service/student-service.service";
import {Subject} from "../Model/subject";
import {Color, LegendPosition, ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit
{
    constructor(private studentService: StudentServiceService) {}

    ngOnInit(): void
    {

    }
}
