/* Checks if key is a direct property.
 *
 * |Name  |Type   |Desc                            |
 * |------|-------|--------------------------------|
 * |obj   |object |Object to query                 |
 * |key   |string |Path to check                   |
 * |return|boolean|True if key is a direct property|
 */

/* example
 * has({one: 1}, 'one'); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function has(obj: {}, key: string): boolean;
 */

const hasOwnProp = Object.prototype.hasOwnProperty;

exports = function(obj, key) {
    return hasOwnProp.call(obj, key);
};
