// snakecase to camelcase
str = "jon_snow_is_the_king_in_the_north"
let finalOut = ''
function snakecasetoCamelCase(s) {
    let splitedArray = s.split("_")
    splitedArray.map((i, index) => {
        if (index == 0) {
        }
        else {
            i = i[0].toUpperCase() + i.slice(1)
        }
        finalOut = finalOut + i
    })
    return finalOut
}
console.log(snakecasetoCamelCase(str))

