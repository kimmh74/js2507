//var br = document.writeln(`<br`)

//i단
for (let i = 2; i < 10; i++) {
    document.writeln(`${i}단 <br>`)
    document.writeln(`-----<br>`)
    //i단 *j
    // for (let j = 1; j < 10; j += 2) {
    for (let j = 1; j <= 9; j += 2) {
        document.writeln(`${i}단*${j} = 결과:${i * j}`)
        document.writeln(`<br>`)
    }
    document.writeln(`<br>`)
}