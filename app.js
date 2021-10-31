var responseDiv = document.body.querySelector(".response");
var NoResponseDiv = document.body.querySelector(".NoResponse");
 document.body.querySelector(".butt").addEventListener("click", function () {
     var textValue = document.body.querySelector(".input").value;
     var textValuePass = document.body.querySelector(".inputPass").value;
     if (textValue!=="coolStudent123" ){
         NoResponseDiv.innerHTML="Wrong User/Password"
     }else{
         responseDiv.innerHTML="";
         NoResponseDiv.innerHTML="";
         MenuPage();
     }
 })

function  MenuPage() {
    var pages = ["Home", "About", "View"];

    function createNav() {
        var nav = document.createElement("nav");
        createButton(pages[0]);
        createButton(pages[1]);
        createButton(pages[2]);

        document.body.appendChild(nav);

        function createButton(pg) {
            var butt = document.createElement("button");
            butt.innerHTML = pg;
            butt.addEventListener("click", function () {
                navigate(pg);
            });
            nav.appendChild(butt);
        }
    }

    function createWrapper() {
        var wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        document.body.appendChild(wrapper);
    }

    function navigate(pg) {
        if (pg === "Home") {
            homePage();
        } else if (pg === "About") {
            aboutPage();
        } else {
            viewPage();
        }
    }

    function homePage() {
        var wrapper = document.body.querySelector(".wrapper");
        wrapper.innerHTML = "";
        var header = document.createElement("h1");
        header.innerHTML = "Home";
        wrapper.appendChild(header);
    }

    function aboutPage() {
        var wrapper = document.body.querySelector(".wrapper");
        wrapper.innerHTML = ""
        var header = document.createElement("h1");
        header.innerHTML = "About";
        var name = document.createElement("h3");
        name.innerHTML = "Kierra White";
        wrapper.appendChild(header);
        wrapper.appendChild(name);
    }

    function viewPage() {
        var wrapper = document.body.querySelector(".wrapper");
        wrapper.innerHTML = "";
        var header = document.createElement("h1");
        header.innerHTML = "View";
        wrapper.appendChild(header);
        var typeText = document.createElement("input");
        typeText.setAttribute('type', 'text');
        typeText.placeholder="Type Text";
        wrapper.appendChild(typeText);
        var importance=document.createElement("input");
        importance.setAttribute('type','text');
        importance.placeholder ="Importance";
        wrapper.appendChild(importance);
        var textList = document.createElement("div");
        textList.innerHTML="";
        var list= [];
        wrapper.appendChild(textList);
        var textButt = document.createElement("button");
        textButt.innerHTML="Button";
        textButt.addEventListener("click",function () {
                var textPush = importance.value +" "+ typeText.value;
                list.push(textPush);
                renderList();
        })
        function renderList() {
            textButt.innerHTML="";
            for (var i = 0; i < list.length; i++) {
                var ele = document.createElement("div");
                ele.innerHTML = list[i];
                textButt.appendChild(ele);
            }
    }
        wrapper.appendChild(textButt);

    }

    createNav();
    createWrapper();

    navigate("Home");
}