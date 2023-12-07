function $id(id) {  //$id("btnLeft")
    return document.getElementById(id);
    //document.getElementById("btnLeft")
}

window.addEventListener("load", function () {

    let wrap = document.querySelector(".wrap");
    let curIndex = 0;
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft").onclick = function () {
        curIndex--;//自己訂的(curent index)
        wrap.style.left = - curIndex * 310 + "px";

        if (curIndex === 0) {
            $id("btnLeft").disabled = true;
        }
        $id("btnRight").disabled = false;
    }
    //-----------------------------------------btnRight.onclick
    $id("btnRight").onclick = function () {
        curIndex++;
        if (curIndex === 6) {
            // $id("btnRight").disabled = true;
            curIndex = 0;
            $id("btnLeft").disabled = true;
        } else {
            $id("btnLeft").disabled = false;
        }
        wrap.style.left = - curIndex * 310 + "px";
    }


})