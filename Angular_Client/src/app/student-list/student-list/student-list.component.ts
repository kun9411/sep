import { Component, ElementRef, OnInit } from '@angular/core';
import { Student } from "../../Model/student";
import { StudentServiceService } from "../../Service/student-service.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as d3 from 'd3';
import { Subject } from "../../Model/subject";
import {NumberValue} from "d3";

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

    students: Student[] | any;
    subjects: Subject[] | any;
    url: string = "http://localhost:8080/students/StudentPerSubject";

    private ChartData: any;
    constructor(private studentService: StudentServiceService,
                private route: ActivatedRoute,
                private router: Router,
                private elRef: ElementRef) {
    }

    ngOnInit(): void {
        this.studentService.findAll().subscribe((data: any) => {
            this.students = data;
        });
        this.studentService.studentsPerSubject().subscribe((data: any) => {
            this.subjects = data;
        });
    }

    deleteStudent(student: Student) {
        this.studentService.delete(student);
    }
}
