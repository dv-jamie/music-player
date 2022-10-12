import { useState } from "react"
import MusicList from "../components/MusicList"
import PlayArea from "../components/PlayArea"
import "./MainPage.css"

function MainPage() {
    const [clickedTab, setClickedTab] = useState("PLAY")
    const [playList, setPlayList] = useState([])
    const [playingMusic, setPlayingMusic] = useState(null)

    return (
        <div className="main-container">
            <div className="main-contents">
                <h1 className="header-title">Today's Music</h1>
                <MusicList
                    setClickedTab={setClickedTab}
                    playList={playList}
                    setPlayList={setPlayList}
                />
            </div>
            <PlayArea
                clickedTab={clickedTab}
                setClickedTab={setClickedTab}
                playList={playList}
                setPlayList={setPlayList}
                playingMusic={playingMusic}
                setPlayingMusic={setPlayingMusic}
            />
        </div>
    )
}

export default MainPage