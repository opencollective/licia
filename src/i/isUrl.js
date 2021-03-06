/* Loosely validate an url.
 *
 * |Name  |Type   |Desc                               |
 * |------|-------|-----------------------------------|
 * |val   |string |Value to check                     |
 * |return|boolean|True if value is an url like string|
 */

/* example
 * isUrl('http://www.example.com?foo=bar&param=test'); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isUrl(val: string): boolean;
 */

exports = function(val) {
    return regUrl.test(val);
};

const regUrl = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
