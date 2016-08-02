if (window.openDatabase) {

    var mydb = openDatabase("clubs_db", "0.1", "Database of Clubs Registered", 1024 * 1024);
   
    mydb.transaction(function(t) {
        t.executeSql("CREATE TABLE IF NOT EXISTS clubsdata (email TEXT PRIMARY KEY, firstname TEXT, lastname TEXT, clubname TEXT, purpose TEXT, events TEXT, fundraisers TEXT, category INTEGER, image TEXT)"); //creates table 
	t.executeSql("CREATE TABLE IF NOT EXISTS users (email TEXT PRIMARY KEY, firstname TEXT, lastname TEXT, password TEXT)"); //creates table 

    });
} else {
    alert("WebSQL is not supported by your browser!"); 
}



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";  
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
function Academics() {
    var catt1 = ["Academic Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
	document.getElementById("thumbnail").className= "unhidden"
	
}
function Service() {
    var catt1 = ["Service Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
    var dataimg = t.executeSql("SELECT image FROM clubsdata WHERE categories = 1");
    var src = document.getElementById("imgg").src;
    if (mydb) {
		mydb.transaction(function(t){
		src.innerHTML = dataimg;
		})
}	else {
		alert("db not found!");
	}	
}
function Other() {
    var catt1 = ["Other Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
}
function SGA() {
    var catt1 = ["Student Government Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
}
function Social() {
    var catt1 = ["Social Awareness Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
}
function Honor() {
    var catt1 = ["Honor Societies", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
    document.getElementById("thumbnail").className= "unhidden"
    var dataimg2 = t.executeSql("SELECT image FROM clubsdata WHERE categories = 2");
    var src2 = document.getElementById("imgg").src;
    if (mydb) {
		mydb.transaction(function(t){
		src2.innerHTML = dataimg2;
		})
}	else {
		alert("db not found!");
	}	
}
function Hobby() {
    var catt1 = ["Hobby Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
}
