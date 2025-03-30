// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import { render, screen , waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { describe, test, expect, vi } from "vitest"
import HomeTest2 from "../HomeTest2"
import { mockUsers } from "./test-convertData.test"
import axios from "axios"

// Mock axios
vi.mock("axios")
const mockedAxios = axios as vi.Mocked<typeof axios>

describe("test HomeTest2", () => {
    test("renders department data correctly", async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: { users: mockUsers } })

        render(<HomeTest2 />)

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
        await waitFor(() => {
            expect(screen.getByText(/Engineering/i)).toBeInTheDocument()
            expect(screen.getByText(/EmilyJohnson - 29112/i)).toBeInTheDocument()
        })
    })
})
