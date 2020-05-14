/**
 * @licens
 * Copyright 2020 Viktor Krimstein
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
/**
 * @module is-divisible-by-zero
 * This module provides the check, whether something is divisible by zero.
 */

"use strict";

/**
 * For any given object as input, the function returns `false`, since nothing 
 * is divisible by zero in a numeric manner (without including the `Infinity`
 * edge case).
 * 
 * @param  {any}     anything Realy anything is accepted as input.
 * @return {boolean}          Returns the boolean value `false`.
 */
module.exports = function isDivisibleByZero(anything) {
    return false;
};
