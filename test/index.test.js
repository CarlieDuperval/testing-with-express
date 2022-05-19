import supertest from "supertest";
import app from "../src/index.js" // our express app the one we are testing

const request = supertest(app) // i call this app 


// Doing a specific test
describe("Getting pest from the Api" , () => {
    it("Should return all the pets i loved before", () => {
        // Arrange  : we are testing the end point , 
        const endpoint = "/pests",
        expectedResponse = "ALl the pets"


        // Act : Execute a get on this end point 
        const actual = await request.get(endpoint)


        //Assert
        //navigate to object to find what we are looking for
        expect(actual.status).toBe(200)
        expect(actual.error).toBeFalsy()
        expect(actual.text).toContain(expectedResponse)


    })
})










