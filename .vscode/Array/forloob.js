const user = ["apple", "banana", "orange"]
// use for take index form arr
for (u in user) {
    console.log(u);
}
// use for take value form arr
for (u of user) {
    console.log(u);
}
// use for take value and index form arr
user.forEach(function(value, index) {
    console.log(index, " : ", value);
})