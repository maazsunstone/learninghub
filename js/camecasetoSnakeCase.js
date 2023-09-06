
// camelcase to snakecase
str = "jonSnowIsTheKingInTheNorth"
let finalOut2 = ''
function camelCasetoSnakeCase(s) {
    let splitedArray = s.split("")
    splitedArray.map((i) => {
        if (i === i.toUpperCase()) {
            i = "_" + i.toLowerCase()
        }
        finalOut2 = finalOut2 + i
    })
    return finalOut2
}
console.log(camelCasetoSnakeCase(str))