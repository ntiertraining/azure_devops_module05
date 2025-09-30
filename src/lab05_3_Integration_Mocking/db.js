// This is our simulated database
export const db = {
    findByUsername: (username) => {
        // In a real app, this would be a database query
        if (username === 'jane_doe') {
            return { id: 1, username: 'jane_doe', role: 'user' };
        }
        return null;
    }
};