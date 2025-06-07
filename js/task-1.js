const elements = document.querySelectorAll('.item'); 
console.log("Nubmer of categories:" + elements.length)

elements.forEach((item) =>
{
    const categoryName = item.querySelector("h2").textContent;
    const categoryList = item.querySelectorAll("ul li").length;
    console.log("Category:" + categoryName)
    console.log("Elements:" + categoryList)
    })
