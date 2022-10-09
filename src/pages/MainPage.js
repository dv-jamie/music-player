import MusicList from "../components/MusicList"
import PlayArea from "../components/PlayArea"
import "./MainPage.css"

function MainPage() {
    return (
        <div className="main-container">
            <h1 className="header-title">Today's Music</h1>
            <MusicList />
            <PlayArea />
        </div>
    )
}

export default MainPage