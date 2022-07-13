

var currentSpin = 0;


var outterCode = [
    "a", "c", "4", "h", "e", "f", "g","d", "i", "u","8", 
    "b", "m", "n", "3", "9", "q", "s", "r","w",
    "5", "o", "7", "6", "y", "z"
]

var innerCode = [
    "r", "g", "x", "f", "n", "q", "m", "b", "u", "h", "v", "o",
    "a", "c", "w", "e", "p", "i", "j", "t", "d", "s", "k", "x", "y", "l"
]


innerCode = innerCode.map(element => {
    return element.toUpperCase();
  });

  outterCode = outterCode.map(element => {
    return element.toUpperCase();
  });


var spinLeft = function() {
    currentSpin+=1;
    outterCode.unshift(outterCode.pop())
    spinny();
}

var spinRight = function() {
    currentSpin-=1;
    outterCode.push(outterCode.shift()) 
    spinny();
}

var spinny = function() {
    var img = document.getElementById('outterring');
    if (currentSpin > 26) {
        currentSpin = 0;
    }

    if (currentSpin < -1) {
        currentSpin = 26;
    }

    var degs = (currentSpin * (360/26));
    img.style.transform = 'rotate(' + degs + 'deg)';

    parseThing();
}

var myInput = document.getElementById("code");
var theOutput = document.getElementById("output");



var parseThing = function() {
    var code = myInput.value;
    var codeArray = code.split("");

    var output = [];
    for (v=0; v<codeArray.length; v++) {
        var letter = codeArray[v];
        var letterPosition = outterCode.findIndex((code) => code === letter);
        output.push(innerCode[letterPosition]);

    }

    var result = output.join('')
    console.log(result);
    theOutput.value = result;
}


myInput.onkeyup = function(e) {
    e = e || window.event;
    myInput.value = myInput.value.toUpperCase()
    parseThing();
};