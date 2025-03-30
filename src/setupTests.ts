// import { expect } from "vitest";
// import matchers from "@testing-library/jest-dom/matchers";

// // เพิ่ม matchers ของ Jest DOM เข้าไปใน expect
// expect.extend(matchers);

import "@testing-library/jest-dom/vitest"
import { afterEach} from 'vitest'
import { cleanup } from '@testing-library/react'

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
})