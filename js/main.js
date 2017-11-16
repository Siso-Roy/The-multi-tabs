

window.canvasStack = [];

function action() {

    //++++++++++++++++++++++++++++++++++++++++++++++++++!!!!!!!!!!!!!!!!
    //check if is correct canvas before drawing anything


    var isMenuDisplayed = false;
    var menuOption = null;
    var canvas = document.getElementById("canvas_2");
    var stage = new createjs.Stage(canvas);


    canvas.addEventListener("contextmenu", function (ev) {

        //mouse cursor coordinates
        var x = ev.clientX;
        var y = ev.clientY;
        console.log("the cursor position: x-"+x+" y-"+y);
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
                        console.log("the index of which you pressed: "+index);
                        if(index == 0){
                            // drawMethod(x, y, stage);
                            var rect = canvas.getBoundingClientRect();
                            // drawMethod((x-rect.left), (y-rect.top), stage);
                            drawMethod(x, y, stage);

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

// create canvas for each tab
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

    if(tabID == 2){

        action();
    }
}

function methodInfo(name, description){
    var name = name;
    var description = description;

}

function changeName(){

}

//* array of method objects and other related objects(such as, method box, different connections)
function drawMethod(shapeX, shapeY, stage) {

    var weith = 100;
    var height = 30;

    console.log("the method runs to here... x:"+shapeX+" y:"+shapeY);

    var graphics = new createjs.Graphics();

    graphics.beginFill("#0008FF");
    // graphics.beginStroke("#f441bb");
    // graphics.drawRect(shapeX/3, shapeY/3, weith, height);
    graphics.drawRect(0, 0, 100, 30);


    var shape = new createjs.Shape(graphics);

    stage.addChild(shape);
    stage.update();
}