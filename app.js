
var character=(Math.random()*2)
var new_character=Math.round(character)

var com_select=["snake","water","gun"][new_character]
// console.log(com_select)
var user_select=prompt("select your character + snake,water,gun")
if(user_select==com_select){
    alert("Drew")

}else if(user_select=="snake" && com_select=="water"){
    alert("you win")
}else if(user_select=="snake" && com_select=="gun"){
    alert("game over")
}else if(user_select=="gun" && com_select=="snake"){
    alert("you win")
}else if(user_select=="water" && com_select=="snake"){
    alert("game over")
}else if(user_select=="water" && com_select=="gun"){
    alert("you win")
}else if(user_select=="gun" && com_select=="water"){
    alert("game over")
}

