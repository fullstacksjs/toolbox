import { removeLeadingSlashes } from './removeLeadingSlashes.ts';
import { removeTrailingSlashes } from './removeTrailingSlashes.ts';

/**
 * Joins path parts with / and remove trailing and leading slashes
 *
 * @export
 * @param {...string[]} paths list of paths to concatenate
 * @returns {string} joined path parts
 *
 * @example
 *
 * joinPaths('a', 'b')                               // 'a/b'
 * joinPaths('a', '/b')                              // 'a/b'
 * joinPaths('a', 'b/')                              // 'a/b'
 * joinPaths('a', '/b/')                             // 'a/b'
 * joinPaths('a/', 'b')                              // 'a/b'
 * joinPaths('a/', '/b')                             // 'a/b'
 * joinPaths('a/', 'b/')                             // 'a/b'
 * joinPaths('a/', '/b/')                            // 'a/b'
 * joinPaths('/a', 'b')                              // 'a/b'
 * joinPaths('/a', '/b')                             // 'a/b'
 * joinPaths('/a', 'b/')                             // 'a/b'
 * joinPaths('/a', '/b/')                            // 'a/b'
 * joinPaths('https://a.com', 'b')                   // 'https://a.com/b'
 * joinPaths('https://a.com', '/b')                  // 'https://a.com/b'
 * joinPaths('https://a.com', 'b/')                  // 'https://a.com/b'
 * joinPaths('https://a.com/', '/b/')                // 'https://a.com/b'
 * joinPaths('https://a.com/', '?b=a')               // 'https://a.com/?b=a'
 * joinPaths('https://a.com/', '/b/', '?query')      // 'https://a.com/b/?query'
 * joinPaths('https://a.com/', '?query', '&a=query') // 'https://a.com/?query/&a=query'
 */
export function joinPaths(...paths: string[]): string {
  const result = paths.map(el =>
    removeLeadingSlashes(removeTrailingSlashes(el)),
  );
  return result.join('/');
}
