import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tsaufgaben',
    templateUrl: './tsaufgaben.component.html',
    styleUrls: ['./tsaufgaben.component.scss']
})
export class TSAufgabenComponent implements OnInit {
    solutionTask1: number = 0
    solutionTask2: string = ""
    solutionTask2_1: string = ""
    solutionTask3: number = 0
    solutionTask3_1: number = 0
    solutionTask4: number[] = []
    solutionTask4_1: number[] = []
    solutionTask5: string = ""
    solutionTask5_1: string = ""
    solutionTask5_2: string = ""
    expectedTask1: number = 361
    expectedTask2: string = "Blau"
    expectedTask2_1: string = "Nichts Gefunden"
    expectedTask3: number = 3
    expectedTask3_1: number = 5
    expectedTask4: number[] = [1, 2, 2, 0, 0, 0]
    expectedTask4_1: number[] = [10, 12, 14, 16, 10, 6, 7, 8]
    expectedTask5: string = "(Soft)(ware D)ev(el(o)p)ment ((a)nd) (P(rogr)(amm)i)ng"
    expectedTask5_1: string = "(Soft)(ware D)ev(el(o)p)men((t) ((a)nd) (P(rogr)amm)i)ng"
    expectedTask5_2: string = "(empty)"

    constructor() {
    }

    /**
     * Aufgabe 1
     * Gegeben: Ein Integer x und ein Integer y
     * Es soll die Summe von x und y zurückgegeben werden
     */
    add(x: number, y: number): number {
        //ToDo
        return -1;
    }

    /**
     * Aufgabe 2
     * Gegeben: Eine Liste aus Strings "list" und ein String "word"
     * Es soll der String "word" zurückgegeben werden, sofern dieser unabhängig von der Schreibweise hinsichtlich Groß- und Kleinschreibung in der Liste "list" enthalten ist.
     * Ist der String "word" nicht in der Liste enthalten, soll "Nicht gefunden!" zurückgegeben werden.
     */
    returnContainedWord(list: string[], word: string): string {
        //ToDo
        return "";
    }

    /**
     * Aufgabe 3 (entnommen aus https://leetcode.com/)
     * Gegeben: Eine Liste aus Integern "list" und eine Zahl "x"
     * Es soll die Anzahl der Subarrays zurückgegeben werden, deren Summe die Zahl "x" ergibt
     *
     *      Lösung nach: https://leetcode.com/problems/subarray-sum-equals-k/solutions/818583/on-typescript/
     */
    amountOfSubarraySum(list: number[], x: number): number {
        //ToDo
        return -1;
    }

    /**
     * Aufgabe 4 (entnommen aus https://leetcode.com/)
     * Gegeben: Eine Anzahl an Items "amountOfItems" und eine Anzahl an Personen "amountOfPeople"
     * Die Items sollen auf die Personen verteilt werden und die Anzahl der Items, welche die einzelnen Personen haben, soll zurückgegeben werden.
     * Die Verteilung der Items auf die Personen erfolgt gemäß folgendem System:
     *      -> Runde 1: die erste Person erhält ein Item, die zweite Person zwei Items, ... und die letzte Person "amountOfPeople" Items (sofern genügend Items "amountOfItems" existieren)
     *      -> Runde 2: die erste Person erhält "amountOfPeople" + 1 Items, die zweite Person "amountOfPeople" + 2  Items, ... und die letzte Person 2 * "amountOfPeople" Items
     *      -> Runde 3: ...
     *      ...
     *      Der Prozess der Verteilung der Items wird gestoppt, sobald keine Items mehr existieren (sprich: Es können nie mehr Items verteilt werden als tatsächlich existieren)
     *
     *      Lösung nach: https://github.com/eddyhdzg/leetcode-typescript-solutions/blob/master/src/problems/1103-Distribute-Candies-to-People.ts
     */
    handleOutItems(amountOfItems: number, amountOfPeople: number): number[] {
        //ToDo
        return [-1]
    }

    /**
     * Aufgabe 5 (entnommen aus https://leetcode.com/)
     * Gegeben: Ein String "stringToBeChecked", welcher Buchstaben und die Zeichen '(' und ') enthält.
     * Der String "stringToBeChecked" soll modifiziert werden, sodass dieser den Aufbau von regulären Ausdrücken entspricht.
     * Konkret muss gewährleistet werden, dass jeder Substring S eindeutig in Klammern eingebettet ist, sprich '('S')'.
     * Ein Substring ist dabei auch ein bereits in Klammern eingebetteter String, z.B: S = '(abc)'.
     * Nicht korrekt gesetzte Klammern (d.h. Klammern, welche entweder kein Ende oder kein Anfang haben) sollen entfernt werden, z.B. '('S')'')' ==> '('S')'
     * Wenn der korrekte String nach der Modifikation leer ist, soll "(empty)" zurückgegeben werden
     *
     *      Lösung nach: https://github.com/eddyhdzg/leetcode-typescript-solutions/blob/master/src/problems/1249.Minimum-Remove-to-Make-Valid-Parentheses.ts
     */
    convertToCorrectStringFormat(stringToBeChecked: string): string {
        //ToDo
        return "";
    }

    ngOnInit(): void {
        this.solutionTask1 = this.add(300, 61)
        this.solutionTask2 = this.returnContainedWord(['Rot', 'Grün', 'Gelb', 'Blau'], 'bLAu')
        this.solutionTask2_1 = this.returnContainedWord(['Rot', 'Grün', 'Gelb', 'Blau'], 'asdf')
        this.solutionTask3 = this.amountOfSubarraySum([1, 5, 5, 2, 3, 1, 6], 6)
        this.solutionTask3_1 = this.amountOfSubarraySum([1, 2, 1, 3, 1, 2, 1], 3)
        this.solutionTask4 = this.handleOutItems(5, 6)
        this.solutionTask4_1 = this.handleOutItems(83, 8)
        this.solutionTask5 = this.convertToCorrectStringFormat("(Soft)(ware D)ev(el(o)p)ment ((a)nd) (P(rogr)(amm)i)ng((")
        this.solutionTask5_1 = this.convertToCorrectStringFormat("(Soft)(ware D)ev(el(o)p)men)((t) ((a)nd) (P(rogr)((amm)i)ng((")
        this.solutionTask5_2 = this.convertToCorrectStringFormat(")))((")
    }
}
