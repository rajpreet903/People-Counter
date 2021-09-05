//document.getElementById("count").innerText = 5
let count = 0;
function increment()
{
    count = count+1;
    document.getElementById("count").textContent = count;
}
function save()
{
    let counter = count + " - "
    document.getElementById("save").textContent += counter
    count= 0;
    document.getElementById("count").textContent = count;
}