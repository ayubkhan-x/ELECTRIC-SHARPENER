var i, c, y, v, s, n;
v = document.getElementsByClassName("youtube");
if (v.length > 0) {
    s = document.createElement("style");
    s.type = "text/css";
    s.innerHTML = '.youtube{background-color:#000;max-width:100%;height:inherit;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}';
    document.body.appendChild(s)
}
for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute("src", "https://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function() {
        var a = document.createElement("iframe");
        a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?modestbranding=1&controls=2&rel=0&showinfo=0&iv_load_policy=3&autoplay=0&enablejsapi=1");
        a.setAttribute("allowfullscreen","");
        a.style.width = this.style.width;
        a.style.height = this.style.height;
        this.parentNode.replaceChild(a, this)
    }
};