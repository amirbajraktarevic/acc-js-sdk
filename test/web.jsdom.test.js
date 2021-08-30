/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


/**********************************************************************************
 * 
 * Test the Browser-side implementation of jsdom node module
 * 
 *********************************************************************************/

 const JSDOM = require('../src/web/jsdom.js').JSDOM;
 
describe('JSDOM', function() {

    it('Should create DOM document', function() {
        const text = "<xml/>";
        var parsed;
        /* eslint no-global-assign: "off" */
        DOMParser = function() {
        }
        DOMParser.prototype.parseFromString = function(text) {
            parsed = text;
        }
        /* eslint no-global-assign: "off" */
        XMLSerializer = function() {
        }
        XMLSerializer.prototype.serializeToString = function() {
            return parsed;
        }

        const dom = new JSDOM(text);
        const xml = dom.serialize();
        expect(xml).toBe(text);
    });


});
