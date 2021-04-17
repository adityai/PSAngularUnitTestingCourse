import { isRootView } from "@angular/core/src/render3/util";

describe('my first test', () => {
    let sut; //System under test

    beforeEach(() => {
        sut = {}
    })

    it('should be true if true', () => {
        // arrange
        sut.a = false;

        // act
        sut.a = true;

        // assert
        expect(sut.a).toBe(true);
    })
}
)