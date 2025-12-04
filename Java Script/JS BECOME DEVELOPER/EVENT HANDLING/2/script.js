let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", () =>
{
    fileinp.click();
})

fileinp.addEventListener("change",(dets) =>
{
    // console.log(dets.target.files[0].name);
    let file = dets.target.files[0];
    if (file) {
        btn.textContent = file.name;
    }
})