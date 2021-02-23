import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';
// tslint:disable-next-line:import-blacklist
import { of } from 'rxjs';

describe('HeroesComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    beforeEach(() => {
        HEROES = [
          {id: 1, name: 'SpiderDude', strength: 8},
          {id: 1, name: 'Wonderful Woman', strength: 24},
          {id: 1, name: 'SuperDude', strength: 55}
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);

        it('should set heroes correctly from the service', () => {
          mockHeroService.getHeroes().and.returnValue(of(HEROES));
          fixture.detectChanges();

          expect(fixture.componentInstance.heroes.length).toBe(3);
        });
    });

});
