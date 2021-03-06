import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"
// Mock object example
describe('HerosComponent', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroService)
    })

    describe('delete', () => {

        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;
            let indicatedHero = HEROES[2];

            component.delete(indicatedHero);

            expect(component.heroes.length).toBe(2);
            expect(component.heroes).not.toContain(indicatedHero);
        })

        it('should call deleteHero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;
            let indicatedHero = HEROES[2];

            component.delete(indicatedHero);

            expect(mockHeroService.deleteHero).toHaveBeenCalled();
        })

        it('should call deleteHero with the right value', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;
            let indicatedHero = HEROES[2];

            component.delete(indicatedHero);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(indicatedHero);
        })

    })
})