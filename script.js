function redirect(link) {
    window.location.href = link;
}

const mainContainer = document.getElementById("content")
const popupScreen = document.getElementById("popup-screen")
const videoPlayer = document.getElementById("video-player")
const profilePic = document.getElementById("profile-pic")
const searchBar = document.getElementById("search-bar")

searchBar.onkeyup = (event) => {
    if (event.key === "Enter") {searchQuery()}
}

profilePic.onclick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.replace("https://youtu.be/a3Z7zEc7AXQ")
}

videoList = [
    {
        title: "Day 0",
        url: "https://Www.youtube.com/embed/6g3XQwLA_yE",
        thumbUrl: "https://i.ytimg.com/vi/6g3XQwLA_yE/hq720.jpg"
    },

    {
        title: "Day 1",
        url: "https://www.youtube.com/embed/QXW9sZcLfx8?si=rbEshmrD9Y5bD27Y",
        thumbUrl: "https://i9.ytimg.com/vi/QXW9sZcLfx8/mqdefault.jpg?v=650869c0&sqp=CPjZoagG&rs=AOn4CLBAU5i2TEOhJF9ZX5TtCCxIKzVzCA"
    },

    {
        title: "Day 3",
        url: "https://www.youtube.com/embed/r-JuE4abQNg?si=hZiAI-JMpffmBAIP",
        thumbUrl: "https://i9.ytimg.com/vi/r-JuE4abQNg/mqdefault.jpg?v=650869fe&sqp=CPjZoagG&rs=AOn4CLAk0c4P9Wtd3elq_glLODSxjyYiZw"
    },
]

const defaultVideoCardNumber = 9
const rateOfCardGenerated = 6
const numberOfVideoCards = videoList.length;
renderedVideoCards = 0

function videoCardRender(number) {
    number = number + renderedVideoCards;
    if (number > numberOfVideoCards) {number = numberOfVideoCards}
    for (let i = renderedVideoCards; i < number; i++) {
        mainContainer.innerHTML += `
    <div class="video-card" onclick='launchVideoPlayer(${i})' title="${videoList[i].title}">
        <div class="thumbnail" style="background-image: url('${videoList[i].thumbUrl}')"></div>
    </div>`
    }
    renderedVideoCards = number;
}

function launchVideoPlayer(index) {
    if (index === -1) {videoPlayer.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"}
    else {videoPlayer.src = videoList[index].url}
    popupScreen.style.display = "block"
}

function searchQuery() {
    alert("We haven't started working on it yet lol")
}

videoCardRender(defaultVideoCardNumber)