/**
 * Copyright (c) 2015-present, Rube Dong
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

const ejs = require('ejs');

module.exports = function(options={}){
    return function(next){

        this.view = (str, data, _options) => {
            this.body = ejs.render(str, data, _options || options);
        };

        this.viewFile = (filename, data, _options, failCall) => {
            ejs.renderFile(filename, data, _options || options, (err, str) => {
                if (failCall && err){
                    failCall(err);
                } else {
                    this.body = str;
                }
            });
        };

        next && next();
    }
};