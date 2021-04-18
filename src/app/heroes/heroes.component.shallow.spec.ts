import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component"

// more complex shallow integration test
describe('HeroesComponent (shallow tests', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ]
        })
        fixture = TestBed.createComponent(HeroesComponent);

        it('should set heroes correctly from the service', () => {
            mockHeroService.getHeroes.and.returnValue(of(HEROES))
            fixture.detectChanges();

            // Not failing at all
            expect(fixture.componentInstance.heroes.length).toBe(4);
        });
    })
})

