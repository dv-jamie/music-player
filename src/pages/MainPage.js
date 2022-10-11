import { useState } from "react"
import MusicList from "../components/MusicList"
import PlayArea from "../components/PlayArea"
import "./MainPage.css"

function MainPage() {
    const [clickedTab, setClickedTab] = useState("PLAY")
    const [playList, setPlayList] = useState([])

    return (
        <div className="main-container">
            <div className="main-contents">
                <h1 className="header-title">Today's Music</h1>
                <MusicList
                    playList={playList}
                    setPlayList={setPlayList}
                    setClickedTab={setClickedTab}
                />
            </div>
            <PlayArea
                playList={playList}
                setPlayList={setPlayList}
                clickedTab={clickedTab}
                setClickedTab={setClickedTab}
            />
        </div>
    )
}

export default MainPage