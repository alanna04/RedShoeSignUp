{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":50,"column":6},"end":{"row":50,"column":7},"action":"insert","lines":[";"],"id":355}],[{"start":{"row":52,"column":0},"end":{"row":52,"column":1},"action":"insert","lines":["c"],"id":356},{"start":{"row":52,"column":1},"end":{"row":52,"column":2},"action":"insert","lines":["o"]},{"start":{"row":52,"column":2},"end":{"row":52,"column":3},"action":"insert","lines":["n"]},{"start":{"row":52,"column":3},"end":{"row":52,"column":4},"action":"insert","lines":["n"]}],[{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"remove","lines":["conn"],"id":357},{"start":{"row":52,"column":0},"end":{"row":52,"column":10},"action":"insert","lines":["connection"]}],[{"start":{"row":52,"column":10},"end":{"row":52,"column":11},"action":"insert","lines":["."],"id":358},{"start":{"row":52,"column":11},"end":{"row":52,"column":12},"action":"insert","lines":["e"]},{"start":{"row":52,"column":12},"end":{"row":52,"column":13},"action":"insert","lines":["d"]},{"start":{"row":52,"column":13},"end":{"row":52,"column":14},"action":"insert","lines":["n"]}],[{"start":{"row":52,"column":13},"end":{"row":52,"column":14},"action":"remove","lines":["n"],"id":359},{"start":{"row":52,"column":12},"end":{"row":52,"column":13},"action":"remove","lines":["d"]}],[{"start":{"row":52,"column":12},"end":{"row":52,"column":13},"action":"insert","lines":["n"],"id":360},{"start":{"row":52,"column":13},"end":{"row":52,"column":14},"action":"insert","lines":["d"]}],[{"start":{"row":52,"column":14},"end":{"row":52,"column":16},"action":"insert","lines":["()"],"id":361}],[{"start":{"row":52,"column":16},"end":{"row":52,"column":17},"action":"insert","lines":[";"],"id":362}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":29},"action":"remove","lines":["var faker = require('faker');"],"id":363}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":364}],[{"start":{"row":0,"column":29},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":365}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":29},"action":"insert","lines":["var faker = require('faker');"],"id":366}],[{"start":{"row":42,"column":20},"end":{"row":42,"column":21},"action":"remove","lines":["r"],"id":367},{"start":{"row":42,"column":19},"end":{"row":42,"column":20},"action":"remove","lines":["e"]},{"start":{"row":42,"column":18},"end":{"row":42,"column":19},"action":"remove","lines":["v"]},{"start":{"row":42,"column":17},"end":{"row":42,"column":18},"action":"remove","lines":["3"]},{"start":{"row":42,"column":16},"end":{"row":42,"column":17},"action":"remove","lines":["4"]},{"start":{"row":42,"column":15},"end":{"row":42,"column":16},"action":"remove","lines":["e"]},{"start":{"row":42,"column":14},"end":{"row":42,"column":15},"action":"remove","lines":["u"]},{"start":{"row":42,"column":13},"end":{"row":42,"column":14},"action":"remove","lines":["g"]},{"start":{"row":42,"column":12},"end":{"row":42,"column":13},"action":"remove","lines":["o"]},{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"remove","lines":["v"]},{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"remove","lines":["n"]},{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"remove","lines":["e"]}],[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"remove","lines":["i"],"id":368},{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"remove","lines":["l"]},{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"remove","lines":["a"]}],[{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"insert","lines":["c"],"id":369},{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"insert","lines":["r"]},{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["e"]},{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["a"]},{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":["t"]},{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"insert","lines":["e"]}],[{"start":{"row":42,"column":12},"end":{"row":42,"column":13},"action":"insert","lines":["2"],"id":370},{"start":{"row":42,"column":13},"end":{"row":42,"column":14},"action":"insert","lines":["3"]},{"start":{"row":42,"column":14},"end":{"row":42,"column":15},"action":"insert","lines":["4"]},{"start":{"row":42,"column":15},"end":{"row":42,"column":16},"action":"insert","lines":["5"]},{"start":{"row":42,"column":16},"end":{"row":42,"column":17},"action":"insert","lines":["6"]}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":52},"action":"remove","lines":["['create23456@gmail.com', '2018-10-01 03:51:37']"],"id":371}],[{"start":{"row":47,"column":40},"end":{"row":47,"column":41},"action":"remove","lines":[" "],"id":372}],[{"start":{"row":45,"column":4},"end":{"row":51,"column":0},"action":"remove","lines":["var q = 'INSERT INTO users (email, created_at) VALUES ?';","    ","    connection.query(q, [data], function(err, result){","        console.log(err);","        console.log(result);","    });",""],"id":373},{"start":{"row":45,"column":4},"end":{"row":50,"column":3},"action":"insert","lines":["var q = 'INSERT INTO users (email, created_at) VALUES ?';"," ","connection.query(q, [data], function(err, result) {","  console.log(err);","  console.log(result);","});"]}],[{"start":{"row":40,"column":4},"end":{"row":41,"column":51},"action":"remove","lines":["['blah@gmail.com', '2018-10-01 03:51:37']","    ['cougarg354@gmail.com', '2018-10-01 03:51:37']"],"id":374},{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"remove","lines":["    "]},{"start":{"row":39,"column":11},"end":{"row":40,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":40,"column":4},"end":{"row":40,"column":5},"action":"insert","lines":["d"],"id":375},{"start":{"row":40,"column":5},"end":{"row":40,"column":6},"action":"insert","lines":["a"]},{"start":{"row":40,"column":6},"end":{"row":40,"column":7},"action":"insert","lines":["t"]},{"start":{"row":40,"column":7},"end":{"row":40,"column":8},"action":"insert","lines":["a"]},{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"insert","lines":["."]},{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"insert","lines":["p"]},{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["u"]},{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["s"]},{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["h"]}],[{"start":{"row":40,"column":13},"end":{"row":40,"column":15},"action":"insert","lines":["()"],"id":376}],[{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"insert","lines":["}"],"id":377}],[{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"remove","lines":["}"],"id":378}],[{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"insert","lines":["]"],"id":379},{"start":{"row":39,"column":12},"end":{"row":39,"column":13},"action":"insert","lines":[";"]}],[{"start":{"row":41,"column":5},"end":{"row":41,"column":6},"action":"remove","lines":[";"],"id":380},{"start":{"row":41,"column":4},"end":{"row":41,"column":5},"action":"remove","lines":["]"]}],[{"start":{"row":40,"column":14},"end":{"row":40,"column":16},"action":"insert","lines":["{}"],"id":381}],[{"start":{"row":40,"column":14},"end":{"row":40,"column":16},"action":"remove","lines":["{}"],"id":382}],[{"start":{"row":40,"column":14},"end":{"row":40,"column":16},"action":"insert","lines":["[]"],"id":383}],[{"start":{"row":40,"column":15},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":384},{"start":{"row":41,"column":0},"end":{"row":41,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"insert","lines":[";"],"id":385}],[{"start":{"row":40,"column":15},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":386},{"start":{"row":41,"column":0},"end":{"row":41,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":41,"column":8},"end":{"row":41,"column":9},"action":"insert","lines":["f"],"id":387},{"start":{"row":41,"column":9},"end":{"row":41,"column":10},"action":"insert","lines":["d"]},{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"insert","lines":["a"]},{"start":{"row":41,"column":11},"end":{"row":41,"column":12},"action":"insert","lines":["k"]},{"start":{"row":41,"column":12},"end":{"row":41,"column":13},"action":"insert","lines":["e"]},{"start":{"row":41,"column":13},"end":{"row":41,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":41,"column":13},"end":{"row":41,"column":14},"action":"remove","lines":["r"],"id":388},{"start":{"row":41,"column":12},"end":{"row":41,"column":13},"action":"remove","lines":["e"]},{"start":{"row":41,"column":11},"end":{"row":41,"column":12},"action":"remove","lines":["k"]},{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"remove","lines":["a"]},{"start":{"row":41,"column":9},"end":{"row":41,"column":10},"action":"remove","lines":["d"]}],[{"start":{"row":41,"column":9},"end":{"row":41,"column":10},"action":"insert","lines":["a"],"id":389},{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"insert","lines":["k"]},{"start":{"row":41,"column":11},"end":{"row":41,"column":12},"action":"insert","lines":["e"]},{"start":{"row":41,"column":12},"end":{"row":41,"column":13},"action":"insert","lines":["r"]},{"start":{"row":41,"column":13},"end":{"row":41,"column":14},"action":"insert","lines":["."]},{"start":{"row":41,"column":14},"end":{"row":41,"column":15},"action":"insert","lines":["n"]},{"start":{"row":41,"column":15},"end":{"row":41,"column":16},"action":"insert","lines":["e"]},{"start":{"row":41,"column":16},"end":{"row":41,"column":17},"action":"insert","lines":["t"]}],[{"start":{"row":41,"column":16},"end":{"row":41,"column":17},"action":"remove","lines":["t"],"id":390},{"start":{"row":41,"column":15},"end":{"row":41,"column":16},"action":"remove","lines":["e"]},{"start":{"row":41,"column":14},"end":{"row":41,"column":15},"action":"remove","lines":["n"]}],[{"start":{"row":41,"column":14},"end":{"row":41,"column":15},"action":"insert","lines":["i"],"id":391},{"start":{"row":41,"column":15},"end":{"row":41,"column":16},"action":"insert","lines":["n"]},{"start":{"row":41,"column":16},"end":{"row":41,"column":17},"action":"insert","lines":["t"]},{"start":{"row":41,"column":17},"end":{"row":41,"column":18},"action":"insert","lines":["e"]},{"start":{"row":41,"column":18},"end":{"row":41,"column":19},"action":"insert","lines":["r"]},{"start":{"row":41,"column":19},"end":{"row":41,"column":20},"action":"insert","lines":["n"]},{"start":{"row":41,"column":20},"end":{"row":41,"column":21},"action":"insert","lines":["e"]},{"start":{"row":41,"column":21},"end":{"row":41,"column":22},"action":"insert","lines":["t"]}],[{"start":{"row":41,"column":22},"end":{"row":41,"column":23},"action":"insert","lines":["."],"id":392},{"start":{"row":41,"column":23},"end":{"row":41,"column":24},"action":"insert","lines":["e"]},{"start":{"row":41,"column":24},"end":{"row":41,"column":25},"action":"insert","lines":["m"]},{"start":{"row":41,"column":25},"end":{"row":41,"column":26},"action":"insert","lines":["a"]},{"start":{"row":41,"column":26},"end":{"row":41,"column":27},"action":"insert","lines":["i"]},{"start":{"row":41,"column":27},"end":{"row":41,"column":28},"action":"insert","lines":["l"]}],[{"start":{"row":41,"column":28},"end":{"row":41,"column":30},"action":"insert","lines":["()"],"id":393}],[{"start":{"row":41,"column":30},"end":{"row":41,"column":31},"action":"insert","lines":[","],"id":394}],[{"start":{"row":41,"column":31},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":395},{"start":{"row":42,"column":0},"end":{"row":42,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["f"],"id":396},{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["a"]},{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":["k"]},{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"insert","lines":["e"]},{"start":{"row":42,"column":12},"end":{"row":42,"column":13},"action":"insert","lines":["r"]},{"start":{"row":42,"column":13},"end":{"row":42,"column":14},"action":"insert","lines":["."]},{"start":{"row":42,"column":14},"end":{"row":42,"column":15},"action":"insert","lines":["d"]},{"start":{"row":42,"column":15},"end":{"row":42,"column":16},"action":"insert","lines":["a"]},{"start":{"row":42,"column":16},"end":{"row":42,"column":17},"action":"insert","lines":["t"]},{"start":{"row":42,"column":17},"end":{"row":42,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":42,"column":18},"end":{"row":42,"column":19},"action":"insert","lines":["."],"id":397},{"start":{"row":42,"column":19},"end":{"row":42,"column":20},"action":"insert","lines":["p"]},{"start":{"row":42,"column":20},"end":{"row":42,"column":21},"action":"insert","lines":["a"]},{"start":{"row":42,"column":21},"end":{"row":42,"column":22},"action":"insert","lines":["s"]},{"start":{"row":42,"column":22},"end":{"row":42,"column":23},"action":"insert","lines":["t"]}],[{"start":{"row":42,"column":23},"end":{"row":42,"column":25},"action":"insert","lines":["()"],"id":398}],[{"start":{"row":44,"column":2},"end":{"row":44,"column":3},"action":"insert","lines":["c"],"id":399},{"start":{"row":44,"column":3},"end":{"row":44,"column":4},"action":"insert","lines":["o"]},{"start":{"row":44,"column":4},"end":{"row":44,"column":5},"action":"insert","lines":["n"]},{"start":{"row":44,"column":5},"end":{"row":44,"column":6},"action":"insert","lines":["s"]},{"start":{"row":44,"column":6},"end":{"row":44,"column":7},"action":"insert","lines":["o"]},{"start":{"row":44,"column":7},"end":{"row":44,"column":8},"action":"insert","lines":["l"]},{"start":{"row":44,"column":8},"end":{"row":44,"column":9},"action":"insert","lines":["e"]},{"start":{"row":44,"column":9},"end":{"row":44,"column":10},"action":"insert","lines":["."]},{"start":{"row":44,"column":10},"end":{"row":44,"column":11},"action":"insert","lines":["l"]},{"start":{"row":44,"column":11},"end":{"row":44,"column":12},"action":"insert","lines":["o"]},{"start":{"row":44,"column":12},"end":{"row":44,"column":13},"action":"insert","lines":["g"]}],[{"start":{"row":44,"column":13},"end":{"row":44,"column":15},"action":"insert","lines":["()"],"id":400}],[{"start":{"row":44,"column":14},"end":{"row":44,"column":15},"action":"insert","lines":["d"],"id":401},{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"insert","lines":["a"]},{"start":{"row":44,"column":16},"end":{"row":44,"column":17},"action":"insert","lines":["t"]},{"start":{"row":44,"column":17},"end":{"row":44,"column":18},"action":"insert","lines":["a"]}],[{"start":{"row":44,"column":19},"end":{"row":44,"column":20},"action":"insert","lines":[";"],"id":402}],[{"start":{"row":46,"column":0},"end":{"row":46,"column":3},"action":"insert","lines":["// "],"id":403},{"start":{"row":48,"column":0},"end":{"row":48,"column":3},"action":"insert","lines":["// "]},{"start":{"row":49,"column":0},"end":{"row":49,"column":3},"action":"insert","lines":["// "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":3},"action":"insert","lines":["// "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":3},"action":"insert","lines":["// "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":39,"column":13},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":404},{"start":{"row":40,"column":0},"end":{"row":40,"column":1},"action":"insert","lines":["f"]},{"start":{"row":40,"column":1},"end":{"row":40,"column":2},"action":"insert","lines":["o"]},{"start":{"row":40,"column":2},"end":{"row":40,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":40,"column":3},"end":{"row":40,"column":4},"action":"insert","lines":[" "],"id":405}],[{"start":{"row":40,"column":4},"end":{"row":40,"column":6},"action":"insert","lines":["()"],"id":406}],[{"start":{"row":40,"column":5},"end":{"row":40,"column":6},"action":"insert","lines":["v"],"id":407},{"start":{"row":40,"column":6},"end":{"row":40,"column":7},"action":"insert","lines":["a"]},{"start":{"row":40,"column":7},"end":{"row":40,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"insert","lines":[" "],"id":408},{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"insert","lines":["i"]}],[{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":[" "],"id":409},{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["="]}],[{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":[" "],"id":410},{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"insert","lines":["0"]},{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"insert","lines":[";"]}],[{"start":{"row":40,"column":15},"end":{"row":40,"column":16},"action":"insert","lines":[" "],"id":411},{"start":{"row":40,"column":16},"end":{"row":40,"column":17},"action":"insert","lines":["i"]}],[{"start":{"row":40,"column":17},"end":{"row":40,"column":18},"action":"insert","lines":[" "],"id":412}],[{"start":{"row":40,"column":17},"end":{"row":40,"column":18},"action":"insert","lines":[" "],"id":413}],[{"start":{"row":40,"column":18},"end":{"row":40,"column":19},"action":"insert","lines":["<"],"id":414}],[{"start":{"row":40,"column":19},"end":{"row":40,"column":20},"action":"insert","lines":[" "],"id":415},{"start":{"row":40,"column":20},"end":{"row":40,"column":21},"action":"insert","lines":["5"]},{"start":{"row":40,"column":21},"end":{"row":40,"column":22},"action":"insert","lines":["0"]},{"start":{"row":40,"column":22},"end":{"row":40,"column":23},"action":"insert","lines":["0"]},{"start":{"row":40,"column":23},"end":{"row":40,"column":24},"action":"insert","lines":[";"]}],[{"start":{"row":40,"column":24},"end":{"row":40,"column":25},"action":"insert","lines":[" "],"id":416},{"start":{"row":40,"column":25},"end":{"row":40,"column":26},"action":"insert","lines":["i"]}],[{"start":{"row":40,"column":26},"end":{"row":40,"column":27},"action":"insert","lines":[" "],"id":417},{"start":{"row":40,"column":27},"end":{"row":40,"column":28},"action":"insert","lines":["+"]},{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"insert","lines":["+"]}],[{"start":{"row":40,"column":29},"end":{"row":40,"column":30},"action":"remove","lines":[" "],"id":418}],[{"start":{"row":40,"column":30},"end":{"row":40,"column":31},"action":"insert","lines":["{"],"id":419}],[{"start":{"row":40,"column":30},"end":{"row":40,"column":31},"action":"remove","lines":["{"],"id":420}],[{"start":{"row":40,"column":30},"end":{"row":40,"column":31},"action":"insert","lines":["{"],"id":421}],[{"start":{"row":40,"column":31},"end":{"row":40,"column":32},"action":"insert","lines":["}"],"id":422}],[{"start":{"row":40,"column":31},"end":{"row":42,"column":0},"action":"insert","lines":["","    ",""],"id":423}],[{"start":{"row":41,"column":0},"end":{"row":41,"column":4},"action":"remove","lines":["    "],"id":424},{"start":{"row":40,"column":31},"end":{"row":41,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":41,"column":0},"end":{"row":41,"column":1},"action":"remove","lines":["}"],"id":425}],[{"start":{"row":45,"column":11},"end":{"row":46,"column":0},"action":"insert","lines":["",""],"id":426},{"start":{"row":46,"column":0},"end":{"row":46,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":46,"column":8},"end":{"row":46,"column":9},"action":"insert","lines":["}"],"id":427},{"start":{"row":46,"column":0},"end":{"row":46,"column":8},"action":"remove","lines":["        "]}],[{"start":{"row":45,"column":4},"end":{"row":45,"column":8},"action":"remove","lines":["    "],"id":428},{"start":{"row":45,"column":0},"end":{"row":45,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":45,"column":0},"end":{"row":45,"column":1},"action":"insert","lines":[" "],"id":429},{"start":{"row":45,"column":1},"end":{"row":45,"column":2},"action":"insert","lines":[" "]},{"start":{"row":45,"column":2},"end":{"row":45,"column":3},"action":"insert","lines":[" "]}],[{"start":{"row":47,"column":1},"end":{"row":47,"column":2},"action":"insert","lines":["/"],"id":430},{"start":{"row":47,"column":2},"end":{"row":47,"column":3},"action":"insert","lines":["/"]}],[{"start":{"row":49,"column":1},"end":{"row":49,"column":2},"action":"remove","lines":["/"],"id":431},{"start":{"row":49,"column":0},"end":{"row":49,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":51,"column":0},"end":{"row":51,"column":3},"action":"remove","lines":["// "],"id":432}],[{"start":{"row":52,"column":0},"end":{"row":52,"column":3},"action":"remove","lines":["// "],"id":433}],[{"start":{"row":53,"column":0},"end":{"row":53,"column":3},"action":"remove","lines":["// "],"id":434}],[{"start":{"row":54,"column":0},"end":{"row":54,"column":2},"action":"remove","lines":["//"],"id":435}],[{"start":{"row":55,"column":0},"end":{"row":55,"column":2},"action":"remove","lines":["//"],"id":436}],[{"start":{"row":49,"column":4},"end":{"row":49,"column":5},"action":"remove","lines":[" "],"id":437},{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":39,"column":0},"end":{"row":39,"column":1},"action":"insert","lines":["/"],"id":438},{"start":{"row":39,"column":1},"end":{"row":39,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":40,"column":0},"end":{"row":40,"column":1},"action":"insert","lines":["/"],"id":439},{"start":{"row":40,"column":1},"end":{"row":40,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":42,"column":2},"end":{"row":42,"column":3},"action":"insert","lines":["/"],"id":440},{"start":{"row":42,"column":3},"end":{"row":42,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":43,"column":3},"end":{"row":43,"column":4},"action":"insert","lines":["/"],"id":441},{"start":{"row":43,"column":4},"end":{"row":43,"column":5},"action":"insert","lines":["/"]}],[{"start":{"row":44,"column":3},"end":{"row":44,"column":4},"action":"insert","lines":["/"],"id":442},{"start":{"row":44,"column":4},"end":{"row":44,"column":5},"action":"insert","lines":["/"]}],[{"start":{"row":45,"column":2},"end":{"row":45,"column":3},"action":"insert","lines":["/"],"id":443},{"start":{"row":45,"column":3},"end":{"row":45,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":46,"column":0},"end":{"row":46,"column":1},"action":"insert","lines":["/"],"id":444},{"start":{"row":46,"column":1},"end":{"row":46,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":39,"column":1},"end":{"row":39,"column":2},"action":"remove","lines":["/"],"id":445},{"start":{"row":39,"column":0},"end":{"row":39,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":39,"column":0},"end":{"row":39,"column":1},"action":"insert","lines":["/"],"id":446},{"start":{"row":39,"column":1},"end":{"row":39,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":39,"column":1},"end":{"row":39,"column":2},"action":"remove","lines":["/"],"id":447},{"start":{"row":39,"column":0},"end":{"row":39,"column":1},"action":"remove","lines":["/"]}],[{"start":{"row":51,"column":0},"end":{"row":55,"column":18},"action":"remove","lines":["connection.query(q, [data], function(err, result) {","  console.log(err);","  console.log(result);"," });"," connection.end();"],"id":448},{"start":{"row":51,"column":0},"end":{"row":58,"column":17},"action":"insert","lines":["var q = 'INSERT INTO users (email, created_at) VALUES ?';"," ","connection.query(q, [data], function(err, result) {","  console.log(err);","  console.log(result);","});"," ","connection.end();"]}],[{"start":{"row":49,"column":0},"end":{"row":49,"column":57},"action":"remove","lines":["var q = 'INSERT INTO users (email, created_at) VALUES ?';"],"id":449},{"start":{"row":48,"column":4},"end":{"row":49,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":57,"column":17},"end":{"row":58,"column":0},"action":"insert","lines":["",""],"id":450},{"start":{"row":58,"column":0},"end":{"row":59,"column":0},"action":"insert","lines":["",""]},{"start":{"row":59,"column":0},"end":{"row":60,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":60,"column":0},"end":{"row":87,"column":17},"action":"insert","lines":["var mysql = require('mysql');","var faker = require('faker');"," "," ","var connection = mysql.createConnection({","  host     : 'localhost',","  user     : 'learnwithcolt',","  database : 'join_us'","});"," "," ","var data = [];","for(var i = 0; i < 500; i++){","    data.push([","        faker.internet.email(),","        faker.date.past()","    ]);","}"," "," ","var q = 'INSERT INTO users (email, created_at) VALUES ?';"," ","connection.query(q, [data], function(err, result) {","  console.log(err);","  console.log(result);","});"," ","connection.end();"],"id":451}],[{"start":{"row":0,"column":0},"end":{"row":89,"column":0},"action":"remove","lines":["var mysql = require('mysql');","var faker = require('faker');","","var connection = mysql.createConnection({","  host     : 'localhost',","  user     : 'alanna04',  //your username","  database : 'join_us'         //the name of your db","});","","","//Selecting Data","//var q = 'SELECT COUNT(*) AS total FROM users';","","//connection.query(q, function (error, results, fields) {","//  if (error) throw error;","//  console.log(results[0].total);","//});","","//Inserting Data","//var q = 'INSERT INTO users (email) VALUES(\"pops_the_dog@gmail.com\")';","//connection.query(q, function (error, results, fields) {","// if (error) throw error;","//  console.log(results);","//});","","//INSERTING DATA TAKE 2","//var person = {","//    email: faker.internet.email(),","//    created_at: faker.date.past()","//};","","//var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {"," // if (err) throw err;","//  console.log(result);","//});","//connection.end();","","//inserting lots of data","","var data =[];","//for (var i = 0; i < 500; i ++){","","  //  data.push([","   //     faker.internet.email(),","   //     faker.date.past()","  // ]);","//}"," // console.log(data);  ","    "," ","var q = 'INSERT INTO users (email, created_at) VALUES ?';"," ","connection.query(q, [data], function(err, result) {","  console.log(err);","  console.log(result);","});"," ","connection.end();","","","var mysql = require('mysql');","var faker = require('faker');"," "," ","var connection = mysql.createConnection({","  host     : 'localhost',","  user     : 'learnwithcolt',","  database : 'join_us'","});"," "," ","var data = [];","for(var i = 0; i < 500; i++){","    data.push([","        faker.internet.email(),","        faker.date.past()","    ]);","}"," "," ","var q = 'INSERT INTO users (email, created_at) VALUES ?';"," ","connection.query(q, [data], function(err, result) {","  console.log(err);","  console.log(result);","});"," ","connection.end();","",""],"id":452}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":453}],[{"start":{"row":0,"column":0},"end":{"row":27,"column":17},"action":"insert","lines":["var mysql = require('mysql');","var faker = require('faker');"," "," ","var connection = mysql.createConnection({","  host     : 'localhost',","  user     : 'learnwithcolt',","  database : 'join_us'","});"," "," ","var data = [];","for(var i = 0; i < 500; i++){","    data.push([","        faker.internet.email(),","        faker.date.past()","    ]);","}"," "," ","var q = 'INSERT INTO users (email, created_at) VALUES ?';"," ","connection.query(q, [data], function(err, result) {","  console.log(err);","  console.log(result);","});"," ","connection.end();"],"id":454}],[{"start":{"row":6,"column":14},"end":{"row":6,"column":27},"action":"remove","lines":["learnwithcolt"],"id":455},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["a"]},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["l"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["a"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["n"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["n"]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["a"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["0"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["4"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":25},"end":{"row":15,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1543417701390,"hash":"6f0ce746811b8037dc875b62e590cc0efca51023"}