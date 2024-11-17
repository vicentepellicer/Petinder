import { beforeAll, vi } from 'vitest';

beforeAll(() => {
	vi.mock('next/navigation', () => import('next-router-mock'));
});
