exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
    reduceString: function (str, amount) {
    },
    wordWrap: function (str, cols) {

    },
    reverseString: function (str) {
        var output = '';
        for (var i = str.length - 1; i >= 0; i--)
            output += str[i];
        return output;
    }
};
