import MusicList from "../components/MusicList"
import PlayArea from "../components/PlayArea"
import "./MainPage.css"

function MainPage() {
    return (
        <div className="main-container">
            <div className="main-contents">
                <h1 className="header-title">Today's Music</h1>
                <MusicList />
            </div>
            <PlayArea />
        </div>
    )
}

export default MainPage