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

"use strict";

const assert = require("assert");
const isDivisibleByZero = require("./");

describe("isDivisibleByZero", function () {
    it('Should always return false no matter the input:', function () {
        assert(!isDivisibleByZero(0));
        assert(!isDivisibleByZero('c'));
        assert(!isDivisibleByZero("string"));
        assert(!isDivisibleByZero(true));
    });
});
