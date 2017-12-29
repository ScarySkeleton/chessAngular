import {ToArrayPipe} from './toArray.pipe';

describe(ToArrayPipe.name, () => {

    let sut: ToArrayPipe;
    beforeAll(() => {
        sut = new ToArrayPipe();
    })

    it("should return an empty array, while no data passed", () => {
        expect(sut.transform(null)).toEqual([]);
    });

    it("should return an array, while passing object", () => {
        expect(sut.transform({1: "data", 2: "data2"})).toEqual(["data", "data2"]);
    });

    it("should return an array, while passing array", () => {
        expect(sut.transform([1,3,4,1])).toEqual([1,3,4,1]);
    });
});
