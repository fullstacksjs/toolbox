/**
 * Clamps a number between two values
 *
 * @param {number} value value
 * @param {number} min min
 * @param {number} max max
 * @returns {number} clamped value
 *
 * @example
 * clamp(5, 0, 100)   // 5
 * clamp(-10, 0, 100) // 0
 * clamp(101, 0, 100) // 100
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(Math.min(value, max), min);
}
