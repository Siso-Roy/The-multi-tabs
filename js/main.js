

window.canvasStack = [];
var test = "is this var a gloable";

function init() {

    var isMenuDisplayed = false;
    var menuOption = null;
    var canvas = document.getElementById("board");
    var stage = new createjs.Stage(canvas);

    canvas.addEventListener("contextmenu", function (ev) {

        //mouse cursor coordinates
        var x = ev.clientX;
        var y = ev.clientY;
        //set the context menu position
        menuOption = window.document.querySelector("#menuDiv");
        menuOption.style.left = x + "px";
        menuOption.style.top = y + "px";
        menuOption.style.display = "block";
        ev.preventDefault();
        isMenuDisplayed = true;

        window.addEventListener("click", function () {

            //get correct menu option has be selected
            var list = document.getElementById("menu");
            for (var i = 0, len = list.children.length; i < len; i++){(
                function(index){
                    list.children[i].onclick = function(){
                        console.log(index);
                        if(index == 0){
                            drawTriangle(x - canvas.offsetLeft, y - canvas.offsetTop, stage);
                        }
                        else if(index == 1){
                            drawCircle(x - canvas.offsetLeft, y - canvas.offsetTop, stage);
                        }
                        else if(index == 2) {
                            drawSquare(x - canvas.offsetLeft, y - canvas.offsetTop, stage);
                        }
                        else {
                            stage.removeAllChildren();
                            stage.update();
                        }
                    }
                })(i);
            }
        },true);

    }, false);

    window.addEventListener("click", function () {
        if(isMenuDisplayed == true){
            menuOption.style.display = "none";
        }
    }, true);

}

//This function is for adding new tab for multi tasking
function addNewTab() {
    //add a tab as default when the page is loaded
    var int = document.getElementById("tabs").childElementCount;
    var divTag = document.createElement("button");
    divTag.className = 'tab';
    divTag.id = 'tab'+int;
    divTag.setAttribute("onclick", "switchCanvas("+int+")");

    var node = document.createTextNode("Tab "+int);
    divTag.appendChild(node);
    document.getElementById("tabs").appendChild(divTag);
    createCanvas(int);

}

//      The canvas object
//        * create canvas object for each tab
//            - iterate through all canvas objects are opened and set the canvas display attribute
//            -
//        * array of method objects and other related objects(such as, different connections)
function createCanvas(id){

    console.log("before push object to the array..."+window.canvasStack.length);
    // canvas id corresponding to the tab id.
    var canvasId = id;

    var canvas = document.createElement("canvas");
    canvas.id = "canvas_"+canvasId;

    // canvasStack.push(canvas);
    window.canvasStack.push(canvas);
    console.log(window.canvasStack[0].id.toString());
    // content.appendChild(node);

    var canvasStack = document.getElementById("canvas_stack");
    canvasStack.appendChild(canvas);
}

function switchCanvas(tabID) {
    console.log("which tab is pressed "+tabID);
}


function methodInfo(name, description){
    var name = name;
    var description = description;

}



//      Functions for drawing shapes
function drawTriangle(shapeX, shapeY, stage) {
    var graphics = new createjs.Graphics();

    graphics.beginFill("#f44141");
    graphics.beginStroke("#85f441");
    graphics.drawPolyStar(shapeX, shapeY, 50, 3, 0, -60);

    var shape = new createjs.Shape(graphics);

    stage.addChild(shape);
    stage.update();
}

function drawCircle(shapeX, shapeY, stage) {
    var graphics = new createjs.Graphics();

    graphics.beginFill("#d341f4");
    graphics.beginStroke("#f46d41");
    graphics.drawCircle(shapeX, shapeY, 50, 50);

    var shape = new createjs.Shape(graphics);

    stage.addChild(shape);
    stage.update();
}

function drawSquare(shapeX, shapeY, stage) {
    var graphics = new createjs.Graphics();

    graphics.beginFill("#41f4f1");
    graphics.beginStroke("#f441bb");
    graphics.drawRect(shapeX, shapeY, 100, 100);

    var shape = new createjs.Shape(graphics);

    stage.addChild(shape);
    stage.update();
}