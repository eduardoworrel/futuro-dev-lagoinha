export default function(cor){
    const div = document.createElement("div")
    div.style.width = "100px"
    div.style.height = "100px"
    div.style.float = "left"
    div.style.margin = "5px"
    div.style.borderRadius = "50%"

    div.style.backgroundColor = cor

    return div
}