// let's start

 var submit = (object)=>{

// ul tag
    var ultag = document.createElement("ul");
    ultag.setAttribute("class" , "ultag");

    // ==================================li->1=======================
var li1 = document.createElement("li")

var img = document.createElement("img");
img.setAttribute("src" ,object.image)
li1.append(img)

ultag.append(li1);

// ======================================  li -->2 =============

var li2 = document.createElement("li")

var span1 = document.createElement("span")
span1.setAttribute("class" , "spandata")
span1.innerHTML = "Name :";
li2.append(span1);

var span2 = document.createElement("span")
span2.setAttribute("class" , "schoolname common");
span2.innerHTML = object.name
li2.append(span2);

ultag.append(li2)

// =============================== li--> 3  ===================================

var li3 = document.createElement("li")

var span3 = document.createElement("span")
span3.setAttribute("class" , "spandata")
span3.innerHTML = "Board :";
li3.append(span3);

var span4 = document.createElement("span")
span4.setAttribute("class" , "board common");
span4.innerHTML = object.board
li3.append(span4);

ultag.append(li3)

// ======================================= li--> 5   =================

var li5 = document.createElement("li")

var span7 = document.createElement("span")
span7.setAttribute("class" , "spandata")
span7.innerHTML = "City :";
li5.append(span7);

var span8 = document.createElement("span")
span8.setAttribute("class" , "city common");
span8.innerHTML = object.city
li5.append(span8);

ultag.append(li5)

// =========================================

var list4 = document.createElement("li")
list4.setAttribute("class" , "li4")

var span5 = document.createElement("span")
span5.setAttribute("class" , "locationStyle")
span5.innerHTML = "Location :";
list4.append(span5);

var span6 = document.createElement("span")
span6.setAttribute("class" , "location");
span6.innerHTML = object.location
list4.append(span6);

ultag.append(list4)

// =====================================li - city======

document.querySelector(".maincontainer").append(ultag);

 }

 var storeSchoollist = [];

 var btn = document.querySelector(".btn")










 btn.addEventListener("click" , ()=>{

    var myurl = "http://localhost:8081/Durga%20sir%20web%20course/Ajax/Ajax%202%20dec%202023/school%20project%20dunamic%20data%20and%20ajax%20call/urlData.json"
    $.ajax({
        url : myurl,
    
        method : "GET",
        datatype : "JSON",
        success : function(response){

            storeSchoollist = response.schoolList
            console.log(storeSchoollist);

            for( var i = 0; i < storeSchoollist.length; i ++ ){

        submit(storeSchoollist[i]);

        
        }

        },


        error : function (error){
            console.log("Failed")
            console.log(error)
        }
    
    })

});

    





