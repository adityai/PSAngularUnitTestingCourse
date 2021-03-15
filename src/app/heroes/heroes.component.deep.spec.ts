import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser';
import { HeroComponent } from '../hero/hero.component';

describe('HeroesComponent (deep tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 1, name: 'Wonderful Woman', strength: 24 },
            { id: 1, name: 'SuperDude', strength: 55 }
        ];
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                HeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should render each hero as a HeroComponent', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));

        // run ngOnInit
        fixture.detectChanges();

        const heroComponentDebugElements = fixture.debugElement.queryAll(By.directive(HeroComponent));
        expect(heroComponentDebugElements.length).toEqual(3);
        for (let i = 0; i < heroComponentDebugElements.length; i++) {
            expect(heroComponentDebugElements[i].componentInstance.hero.name).toEqual(HEROES[i].name);
        }
    });

    it(`should call heroService.deleteHero when the Hero Component's 
    delete button is clicked`, () => {
        spyOn(fixture.componentInstance, 'delete');
        mockHeroService.getHeroes.and.returnValue(of(HEROES));

        fixture.detectChanges();

        const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent))
        heroComponents[0].query(By.css('button')).triggerEventHandler('click', {
            stopPropagation: () => { }
        });

        expect(fixture.componentInstance.delete).toHaveBeenCalledWith(HEROES[0]);

    });

});
