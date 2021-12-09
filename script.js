function generate(){
    let n=document.getElementById("num").value;
    var i;
    for(i=1;i<=n;i++)
    {
        var image = document.createElement("img");
        image.src = "/home/meiarasu/Desktop/Neo/Training/giftbox/gift.png";
        document.getElementById("ret").appendChild(image);
    }
}