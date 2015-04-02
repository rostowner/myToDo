/**
 * Created by rost on 21.03.15.
 */
var obj = function () {
    var name = '@rostowner';
    var self = {
        getName: function () {
            return name;
        },
        setName: function (str) {
            str || name;
            name = str;
        }
    };
    return self;
};

console.log('my acc: ', obj.getName);