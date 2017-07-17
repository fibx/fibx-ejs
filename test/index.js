/**
 * Copyright (c) 2015-present, Rube Dong
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

const test = require('test');
const http = require('http');
const coroutine = require("coroutine");
const app = require('@fibjs/fibx')();
const fibxEjs = require('../');
test.setup();

coroutine.start(function(){
    app.use(fibxEjs());
    app.use('/test/view', function(next){
        this.view('<html><head></head><body><%=data.a %></body></html>', {
            data: {a: 1, b:2}
        });
    });
    app.use('/test/file', function(next){
        this.viewFile('test/test.ejs', {data: {a :1}}, function(err){
            if (err){
                console.log(err);
            }
        });
    });
    app.listen(7758);
});

coroutine.sleep(100);

describe('----------------------------fibx-ejs--------------------------\r\n', function() {
    it('render by view', function(){
        var r = http.request('get', 'http://127.0.0.1:7758/test/view');
        assert.equal(r.read().toString(), '<html><head></head><body>1</body></html>');
    });

    it('render by viewFile', function(){
        var r = http.request('get', 'http://127.0.0.1:7758/test/file');
        assert.equal(r.read().toString(), '<html>\n<head>\n\t<title>fibx-ejs test</title>\n</head>\n<body>\n\t\n\t\t\n\t\t\t1\n\t\t\n\t\t\t2\n\t\t\n\t\t\t3\n\t\t\n\t\t\t4\n\t\t\n\t\t\t5\n\t\t\n\t\t\t6\n\t\t\n\t\t\t7\n\t\t\n\t\t\t8\n\t\t\n\t\t\t9\n\t\t\n\t\t\t10\n\t\t\n\t\t\t11\n\t\t\n\t\t\t12\n\t\t\n\t\t\t13\n\t\t\n\t\t\t14\n\t\t\n\t\t\t15\n\t\t\n\t\t\t16\n\t\t\n\t\t\t17\n\t\t\n\t\t\t18\n\t\t\n\t\t\t19\n\t\t\n\t\t\t20\n\t\t\n\t\t\t21\n\t\t\n\t\t\t22\n\t\t\n\t\t\t23\n\t\t\n\t\t\t24\n\t\t\n\t\t\t25\n\t\t\n\t\t\t26\n\t\t\n\t\t\t27\n\t\t\n\t\t\t28\n\t\t\n\t\t\t29\n\t\t\n\t\t\t30\n\t\t\n\t\t\t31\n\t\t\n\t\t\t32\n\t\t\n\t\t\t33\n\t\t\n\t\t\t34\n\t\t\n\t\t\t35\n\t\t\n\t\t\t36\n\t\t\n\t\t\t37\n\t\t\n\t\t\t38\n\t\t\n\t\t\t39\n\t\t\n\t\t\t40\n\t\t\n\t\t\t41\n\t\t\n\t\t\t42\n\t\t\n\t\t\t43\n\t\t\n\t\t\t44\n\t\t\n\t\t\t45\n\t\t\n\t\t\t46\n\t\t\n\t\t\t47\n\t\t\n\t\t\t48\n\t\t\n\t\t\t49\n\t\t\n\t\t\t50\n\t\t\n\t\t\t51\n\t\t\n\t\t\t52\n\t\t\n\t\t\t53\n\t\t\n\t\t\t54\n\t\t\n\t\t\t55\n\t\t\n\t\t\t56\n\t\t\n\t\t\t57\n\t\t\n\t\t\t58\n\t\t\n\t\t\t59\n\t\t\n\t\t\t60\n\t\t\n\t\t\t61\n\t\t\n\t\t\t62\n\t\t\n\t\t\t63\n\t\t\n\t\t\t64\n\t\t\n\t\t\t65\n\t\t\n\t\t\t66\n\t\t\n\t\t\t67\n\t\t\n\t\t\t68\n\t\t\n\t\t\t69\n\t\t\n\t\t\t70\n\t\t\n\t\t\t71\n\t\t\n\t\t\t72\n\t\t\n\t\t\t73\n\t\t\n\t\t\t74\n\t\t\n\t\t\t75\n\t\t\n\t\t\t76\n\t\t\n\t\t\t77\n\t\t\n\t\t\t78\n\t\t\n\t\t\t79\n\t\t\n\t\t\t80\n\t\t\n\t\t\t81\n\t\t\n\t\t\t82\n\t\t\n\t\t\t83\n\t\t\n\t\t\t84\n\t\t\n\t\t\t85\n\t\t\n\t\t\t86\n\t\t\n\t\t\t87\n\t\t\n\t\t\t88\n\t\t\n\t\t\t89\n\t\t\n\t\t\t90\n\t\t\n\t\t\t91\n\t\t\n\t\t\t92\n\t\t\n\t\t\t93\n\t\t\n\t\t\t94\n\t\t\n\t\t\t95\n\t\t\n\t\t\t96\n\t\t\n\t\t\t97\n\t\t\n\t\t\t98\n\t\t\n\t\t\t99\n\t\t\n\t\t\t100\n\t\t\n\t\n</body>\n</html>');
    });
});

test.run();
process.exit(0);