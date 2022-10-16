import { useState } from "react"
import MusicList from "../components/MusicList"
import PlayArea from "../components/PlayArea"
import "./MainPage.css"

function MainPage() {
    const [clickedTab, setClickedTab] = useState("LIST")
    const [playList, setPlayList] = useState([])
    const [playingMusic, setPlayingMusic] = useState({id: null})
    const [audio, setAudio] = useState(new Audio())

    return (
        <div className="main-container">
            <div className="main-contents">
                <h1 className="header-title">Today's Music</h1>
                <MusicList
                    setClickedTab={setClickedTab}
                    playList={playList}
                    setPlayList={setPlayList}
                    // setPlayingMusic={setPlayingMusic}
                    // audio={audio}
                    // setAudio={setAudio}
                />
            </div>
            <PlayArea
                clickedTab={clickedTab}
                setClickedTab={setClickedTab}
                playList={playList}
                setPlayList={setPlayList}
                playingMusic={playingMusic}
                setPlayingMusic={setPlayingMusic}
                audio={audio}
                setAudio={setAudio}
            />
        </div>
    )
}

export default MainPage