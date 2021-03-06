import { TestBed, inject } from "@angular/core/testing"
import { HeroService } from "./hero.service"
import { MessageService } from "./message.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('HeroService', () => {
    let mockMessageService;
    let httpTestingController: HttpTestingController;
    // let service: HeroService;

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HeroService,
                { provide: MessageService, useValue: mockMessageService }
            ]
        })

        httpTestingController = TestBed.get(HttpTestingController);
        // service = TestBed.get(HeroService);
        // let heroSvc = TestBed.get(HeroService);
        // let mesasgeSvc = TestBed.get(MessageService);
    });

    describe('getHero', () => {

        it('should call get with the correct URL',
            inject([
                HeroService,
                HttpTestingController],
                (
                    service: HeroService,
                    controller: HttpTestingController) => {

                    service.getHero(4).subscribe(() => {
                        console.log('fulfilled');
                    });
                    // service.getHero(3).subscribe();

                    const request = httpTestingController.expectOne('api/heroes/4');
                    request.flush({ id: 4, name: 'SuperDude', strength: 100 });
                    httpTestingController.verify();
                }
            )
        )
    });
})
