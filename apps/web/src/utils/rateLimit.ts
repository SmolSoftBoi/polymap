import { LRUCache } from 'lru-cache'

/** Milliseconds before an entry expires. */
const TTL_MS = 60_000

/** Maximum number of keys to track. */
const MAX_KEYS = 1000

export interface RateLimiter {
  /**
   * Returns `true` if the action is allowed for the key.
   */
  allow(key: string): boolean
}

const limiter = new LRUCache<string, true>({ max: MAX_KEYS, ttl: TTL_MS })

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

