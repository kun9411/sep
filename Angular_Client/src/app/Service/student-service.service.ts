import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Student} from "../Model/student";
import {Subject} from "../Model/subject";
import * as d3 from 'd3';

@Injectable({
    providedIn: 'root'
})
export class StudentServiceService {

    private studentURL: string;

    constructor(private http: HttpClient) {
        this.studentURL = 'http://localhost:8080/students';
    }

    //Gibt eine Liste zurück, welche alle Studenten enthält.
    public findAll(): Observable<Student[]> {
        return this.http.get<Student[]>(this.studentURL);
    }

    //Nimmt als parameter ein Objekt vom typ Student entgegen und schickt dieses an den Server, damit dieser den Student speichert.
    public save(student: Student) {
        return this.http.post<Student>(this.studentURL, student);
    }

    //Nimmt ein Objet vom Typ Student entgegen und schickt es an den Server. Der Server wird den Student dann löschen
    public delete(student: Student) {
        this.http.delete(this.studentURL + "/" + student.id).subscribe({
            next:()=>{
                window.location.reload();
            }
        });
    }

    //Nimmt einen String als parameter entgegen und gibt alle Studenten zurück, deren Nachname dem String entspricht.
    public findByLastName(input: String) {
        return this.http.get<Student[]>(this.studentURL + "/lastname/" + input);
    }

    //Nimmt einen String als parameter entgegen und gibt alle Studenten zurück, deren Vorname dem String entspricht.
    public findByFirstName(input: String) {
        return this.http.get<Student[]>(this.studentURL + "/firstname/" + input);
    }

    //Nimmt einen String als parameter entgegen und gibt alle Studenten zurück, deren Fach dem String entspricht.
    public findBySubject(input: String) {
        return this.http.get<Student[]>(this.studentURL + "/subject/" + input);
    }

    //Nimmt einen String als parameter entgegen und gibt alle Studenten zurück, deren E-Mail dem String entspricht.
    public findByEmail(input: String) {
        return this.http.get<Student[]>(this.studentURL + "/email/" + input);
    }

    //Gibt eine Liste zurück, welche alle Fächer enthält und alle Studenten pro Fach.
    public studentsPerSubject(): Observable<Subject[]> {
        return this.http.get<Subject[]>(this.studentURL + "/StudentPerSubject");
    }

    public D3Subjects(): any {
        d3.json("http://localhost:8080/students/StudentPerSubject").then(data => {
            return data;
        })
    }
}
