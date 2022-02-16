// Array <T>
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = ["a", "b", "c"];
var arr4 = ["a", "b", "c"];
var id = true;
// Basic function
function getLowerCase(str) {
    return str.toLowerCase();
}
// Arrow function
var addNumber = function (a, b) { return a + b; };
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
// logs "12, 26"
var point = { x: 12, y: 26 };
var person = {
    name: "Murphy",
    age: 25,
    hobby: "Coding"
};
var anonymousPerson = {
    name: "",
    age: 0,
    hobby: ""
};
