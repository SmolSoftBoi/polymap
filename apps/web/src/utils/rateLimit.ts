import { LRUCache } from 'lru-cache'

interface RateLimiter {
  allow(key: string): boolean
}

const limiter = new LRUCache<string, true>({ max: 1000, ttl: 60_000 })

/**
 * Simple rate limiter allowing one action per key per minute.
 */
export const rateLimiter: RateLimiter = {
  allow(key: string) {
    if (limiter.has(key)) return false
    limiter.set(key, true)
    return true
  }
}

