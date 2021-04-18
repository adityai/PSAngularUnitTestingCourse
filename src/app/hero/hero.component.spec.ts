import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component"

describe('HeroComponent (shallow tests', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA] // tells angular: for this module do not error if you encouter an unknown attribute or unknown error in the html of the template. just ignore it.
        });
        fixture = TestBed.createComponent(HeroComponent);
        fixture.componentInstance
    })

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };

        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    })

    it('should render the hero name in the anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
        // execute change detection to implement the bindings in the html
        fixture.detectChanges();

        // debugElement is a wrapper around the dom node
        let debugElementA = fixture.debugElement.query(By.css('a'));
        expect(debugElementA.nativeElement.textContent).toContain('SuperDude');

        // nativeElement: standard html dom element
        // querySelector: To select specific dom element by tag
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    })

})