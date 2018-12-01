function fillMatrix(n, m) {

    var mx = [];
    for (var i = 0; i < n; i++) {
        mx.push([])
        for (var j = 0; j < m; j++) {
            mx[i].push(Math.round(Math.random() * 5))
        }
    }
    return mx;
}
var matrix = fillMatrix(50, 50)

var side = 40;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var kerpar1Arr = [];
var kerpar2Arr = [];

function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gi = new Gishatich(x, y)
                gishatichArr.push(gi)
            }
            else if (matrix[y][x] == 4) {
                var k1 = new Kerpar1(x, y)
                kerpar1Arr.push(k1)
            }
            else if (matrix[y][x] == 5) {
                var k2 = new Kerpar2(x, y)
                kerpar2Arr.push(k2)
            }
        }
    }

    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
            }
            rect(x * side, y * side, side, side)

        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }

    for (var i in kerpar1Arr) {
        kerpar1Arr[i].move()
        kerpar1Arr[i].eat()
        kerpar1Arr[i].eat1()
        kerpar1Arr[i].eat2()
        kerpar1Arr[i].mult()
        kerpar1Arr[i].die()
    }

    for (var i in kerpar2Arr) {
        kerpar2Arr[i].move()
        kerpar2Arr[i].eat()
        kerpar2Arr[i].mult()
        kerpar2Arr[i].die()
    }

}



