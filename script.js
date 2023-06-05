const clickImg = (img) => {
    var img_arrays = document.getElementsByClassName("imgs")[0].childNodes;
    for (let i = 0; i < img_arrays.length; i++) {
        if (i%2 == 0) {
            
        } else {
            img_arrays[i].style.opacity = "100%";
        }
        
    }
    var im = document.getElementById("module-"+img);
    im.style.border = "2px solid hsl(26, 100%, 55%)";
    im.style.opacity = "0.3";
    document.getElementById("big-img").src = im.src.replace("-thumbnail","");
}
const increase = () => {
    document.getElementById("quantity").innerText = Number(document.getElementById("quantity").textContent) + 1;
}
const decrease = () => {
    if (document.getElementById("quantity").textContent > 0) {
        document.getElementById("quantity").innerText = Number(document.getElementById("quantity").textContent) - 1;
    }
}
const showCart = () => {
    var cart = document.getElementById("cart");
    if (cart.style.display == "") {
        document.getElementById("cart").style.display = "block";
    } else {
        document.getElementById("cart").style.display = "";
    }
}
document.getElementById("close").addEventListener("click",()=>{
    document.getElementsByClassName("overlay")[0].style.display = "none";
})
document.getElementById("big-img").addEventListener("click",()=>{
    document.getElementsByClassName("overlay")[0].style.display = "flex";
})
const next = (type) => {
    if (type == "over") {
        var presrc = "big-img-over";
    } else {
        var presrc = "big-img";
    }
    var src = document.getElementById(presrc).src;
    src = "/images" + src.split("/images")[1];
    var img_arrays = ["/images/image-product-1.jpg","/images/image-product-2.jpg","/images/image-product-3.jpg","/images/image-product-4.jpg"]
    
    for (let i = 0; i < img_arrays.length; i++) {
        if (img_arrays[i] == src) {
            if (i >= 3) {
                break;
            }
            document.getElementById(presrc).src = img_arrays[i+1]
        }
    }
}
const prev = (type) => {
    if (type == "over") {
        var presrc = "big-img-over";
    } else {
        var presrc = "big-img";
    }
    var src = document.getElementById(presrc).src;
    src = "/images" + src.split("/images")[1];
    var img_arrays = ["/images/image-product-1.jpg","/images/image-product-2.jpg","/images/image-product-3.jpg","/images/image-product-4.jpg"]
    
    for (let i = 0; i < img_arrays.length; i++) {
        if (img_arrays[i] == src) {
            if (i <= 0) {
                break;
            }
            document.getElementById(presrc).src = img_arrays[i-1]
        }
    }
}
