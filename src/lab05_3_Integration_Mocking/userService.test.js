
import { describe, it, expect } from 'vitest';
import { validateUsername, getUser } from './userService';

describe('validateUsername', () => {
    it('should return true for a valid username (more than 3 characters)', () => {
        // This test will fail because the function is not yet implemented.
        expect(validateUsername('joel_doe')).toBe(true);
    });
    
    // new test to check for invalid names (less than or equal to 3 characters)
    it('should return false for an invalid username (3 or fewer characters)', () => {
        expect(validateUsername('abc')).toBe(false);
    });

    it('should return false for non-string input', () => {
        expect(validateUsername(123)).toBe(false);
        expect(validateUsername(null)).toBe(false);
    });
});

describe('getUser', () => {
    // Mock the entire db module
    vi.mock('./db', () => ({
        db: {
            findByUsername: vi.fn((username) => {
                if (username === 'test_user') {
                    return { id: 2, username: 'test_user' };
                }
                return null;
            }),
        },
    }));

    it('should retrieve a user from the mock database', async () => {
        const user = await getUser('test_user');
        expect(user).toEqual({ id: 2, username: 'test_user' });
        expect(vi.mocked(await import('./db')).db.findByUsername).toHaveBeenCalledWith('test_user');
    });

    it('should return null for a non-existent user', async () => {
        const user = await getUser('non_existent');
        expect(user).toBeNull();
    });
});

