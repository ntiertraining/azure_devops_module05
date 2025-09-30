import { describe, it, expect } from 'vitest';

/**
 * A simple test suite to verify string length.
 * We use 'describe' to group related tests together.
 */
describe('String Length', () => {
    /**
     * This is a single test case.
     * We use 'it' to define the specific behavior we are testing.
     */
    it('should return the correct length of a non-empty string', () => {
        // Define the string to be tested.
        const testString = 'Hello, Vite!';

        // Use 'expect' to create an assertion.
        // We expect the length of our string to be 12.
        expect(testString.length).toBe(12);
    });

    it('should return 0 for an empty string', () => {
        // Test for an empty string.
        const emptyString = '';

        // Expect the length to be 0.
        expect(emptyString.length).toBe(0);
    });
});
