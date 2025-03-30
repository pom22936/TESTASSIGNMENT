import { describe, test, expect } from "vitest"
import { User } from "../models"
import { transformUserData } from "../common-misc"

export const mockUsers: User[] = [
    {
        id: 1,
        firstName: "Emily",
        lastName: "Johnson",
        maidenName: "Smith",
        age: 28,
        gender: "female",
        email: "emily.johnson@x.dummyjson.com",
        phone: "+81 965-431-3024",
        username: "emilys",
        password: "emilyspass",
        birthDate: "1996-5-30",
        image: "https://dummyjson.com/icon/emilys/128",
        bloodGroup: "O-",
        height: 193.24,
        weight: 63.16,
        eyeColor: "Green",
        hair: { color: "Brown", type: "Curly" },
        ip: "42.48.100.32",
        address: {
        address: "626 Main Street",
        city: "Phoenix",
        state: "Mississippi",
        stateCode: "MS",
        postalCode: "29112",
        coordinates: { lat: -77.16213, lng: -92.084824 },
        country: "United States",
        },
        macAddress: "47:fa:41:18:ec:eb",
        university: "University of Wisconsin--Madison",
        bank: {
        cardExpire: "03/26",
        cardNumber: "9289760655481815",
        cardType: "Elo",
        currency: "CNY",
        iban: "YPUXISOBI7TTHPK2BR3HAIXL",
        },
        company: {
        department: "Engineering",
        name: "Dooley, Kozey and Cronin",
        title: "Sales Manager",
        address: {
            address: "263 Tenth Street",
            city: "San Francisco",
            state: "Wisconsin",
            stateCode: "WI",
            postalCode: "37657",
            coordinates: { lat: 71.814525, lng: -161.150263 },
            country: "United States",
        },
        },
        ein: "977-175",
        ssn: "900-590-289",
        userAgent: "Mozilla/5.0",
        crypto: { coin: "Bitcoin", wallet: "0xb9fc2f", network: "Ethereum" },
        role: "admin",
    },
]

describe("transformUserData()", () => {
    test("should group users by department", () => {
        const result = transformUserData(mockUsers)

        expect(result).toEqual({
        Engineering: {
            male: 0,
            female: 1,
            ageRange: "28-28",
            hair: { Brown: 1 },
            addressUser: { "EmilyJohnson": "29112" },
        },
        })
    })
})
