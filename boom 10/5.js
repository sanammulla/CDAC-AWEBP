

window.addEventListener("load", () => {
    let parent = document.querySelector("#parent");
    console.log(parent);


    let postList = [
        { id: 1, post: "Hello World" },
        { id: 2, post: "Hello Universe" },
        { id: 3, post: "Hello Javascript" },
        { id: 4, post: "Hello HTML" },
        { id: 5, post: "Hello CSS" },
        { id: 6, post: "Hello DOM" },
        { id: 7, post: "Hello JSON" },
        { id: 8, post: "Hello XML" },
        { id: 9, post: "Hello Callback" },
        { id: 10, post: "Hello AJAX" },
      ];

    for(let i=0; i<postList.length; i++){
        let item = postList[i];

        let newbody = parent.children[0].cloneNode(true);
        newbody.style.display = "flex";
        newbody.children[0].innerHTML = item.post;

        parent.insertBefore(newbody,parent.firstChild);
    }
});