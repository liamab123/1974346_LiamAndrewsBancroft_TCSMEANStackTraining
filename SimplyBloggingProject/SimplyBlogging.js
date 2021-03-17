var blogs = []; //array for holding blogs
if(localStorage.getItem("blogs") != null){
    blogs = JSON.parse(localStorage.getItem("blogs")); //Begin by pulling the blogs out of local storage into an array
}
function addBlog(){

}
function clearForm(){
    var inputForm = document.getElementById("inputform");
    inputForm.reset();
}
function blogSubmit(){ /*Function for adding a new blog to the site. This creates a new div with bootstrap grid layout and puts it in the
                            blog area. It also adds the new post to local storage so that it can be loaded.*/
    var blog = {}; //create empty variable to store in local storage once it's populated
    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;
    var imageInfo = document.getElementById("image").value;
    blog.title = title;
    blog.article = article;
    blog.imageInfo = imageInfo; 
    var titleDiv = document.createElement("h2"); //Title
    var articleDiv = document.createElement("div"); //Article
    var imageDiv = document.createElement("div"); //div which holds the image
    var theImage = document.createElement("img"); //the image itself
    imageDiv.appendChild(theImage);
    articleDiv.classList.add("col"); //add bootstrap classes for style 
    imageDiv.classList.add("col");
    theImage.classList.add("img-fluid");
    var blogDiv = document.createElement("div"); //Make a new div to hold the blog 
    blogDiv.classList.add("row"); //Make the new blog a row in our grid
    var blogArea = document.getElementById("blogscontainer"); 
    titleDiv.innerHTML=blog.title;
    articleDiv.innerHTML = blog.article;
    theImage.src = blog.imageInfo;
    blogDiv.appendChild(titleDiv);
    blogDiv.appendChild(articleDiv);
    blogDiv.appendChild(imageDiv);
    blogArea.appendChild(blogDiv);  //add the new blog to the blog area
    var lineBreak = document.createElement("hr"); 
    blogArea.appendChild(lineBreak); 
    var blogString = JSON.stringify(blog); //These 3 lines add the current blog to local storage
    blogs.push(blogString);
    localStorage.setItem("blogs",JSON.stringify(blogs));
    clearForm(); // reset the form for a new submission

}
function loadBlogs(){ //Method for making sure blogs don't get cleared out when page reloads.  
    for(var i = 0; i<blogs.length;i++){
        var curBlog = JSON.parse(blogs[i]);
        var titleDiv = document.createElement("h2");
        var articleDiv = document.createElement("div");
        var imageDiv = document.createElement("div"); //div which holds the image
        var theImage = document.createElement("img"); //the image itself
        imageDiv.appendChild(theImage);
        articleDiv.classList.add("col");
        imageDiv.classList.add("col");
        theImage.classList.add("img-fluid"); //make the image responsive
        var blogArea = document.getElementById("blogscontainer");
        var blogDiv = document.createElement("div");
        blogDiv.classList.add("row");
        titleDiv.innerHTML=curBlog.title;
        articleDiv.innerHTML = curBlog.article;
        theImage.src = curBlog.imageInfo;
        blogDiv.appendChild(titleDiv);
        blogDiv.appendChild(articleDiv);
        blogDiv.appendChild(imageDiv);
        blogArea.appendChild(blogDiv); 
        var lineBreak = document.createElement("hr");
        blogArea.appendChild(lineBreak);
    }
}
function clearAll(){ //Function for clearing out local storage and deleting the currently stored blogs
    if(confirm("Delete all blogs and clear local storage?")){ //Double check user wants to delete all blogs
    localStorage.clear();
    location.reload();
    }
}