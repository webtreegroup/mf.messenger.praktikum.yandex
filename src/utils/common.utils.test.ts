
import { assert } from "chai"
import { getArrLastEl } from "./common.utils.js"

describe("Typescript + Babel usage suite", () => {
    const arr = [1, 5, 6, 2]

    it("should return last element of array", () => {
        assert.equal(getArrLastEl(arr), 2)
    })
})