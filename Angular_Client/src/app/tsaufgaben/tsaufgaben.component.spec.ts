import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TSAufgabenComponent} from './tsaufgaben.component';

describe('TSAufgabenComponent', () => {
    let component: TSAufgabenComponent;
    let fixture: ComponentFixture<TSAufgabenComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TSAufgabenComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TSAufgabenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
