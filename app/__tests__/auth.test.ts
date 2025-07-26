import { registerUser, authenticateUser } from '../src/services/auth';

describe('Auth service', () => {
  it('registers and authenticates a user', async () => {
    await registerUser('test@example.com', 'pass');
    const result = await authenticateUser('test@example.com', 'pass');
    expect(result).toBe(true);
  });
});
