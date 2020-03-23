//my name
document.write('my name is' + '<br/>')
let name = "Faith Okpala";
document.write(name + '<br/>' + '<br/>');

//my courses
document.write('my courses are:' + '<br/>')
let courses = ["html", "css", "javascript", "php", "node.js"];
document.write(courses + '<br/>' + '<br/>');

//odd number count
document.write('odd number counts are:' + '<br/>')
for (let i = 0; i <= 200; i++) {
    if (i % 2 !== 0) {
        document.write(i + '<br/>');
    }
}