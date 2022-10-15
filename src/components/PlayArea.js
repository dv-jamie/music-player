import { useRef, useState } from "react"
import "./PlayArea.css"
import MUSIC_LIST from "../databases/musicList"
import no_image from "../images/no_image.jpg"

const tabType = {
    PLAY: "PLAY",
    LIST: "LIST"
}

function PlayArea({
    clickedTab,
    setClickedTab,
    playList,
    setPlayList,
    playingMusic,
    setPlayingMusic,
    audio,
    setAudio
}) {
    const audioPlayerRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)

    const onRemoveButtonClick = (musicIndex) => {
        setPlayList(playList.filter(music => music.index !== musicIndex))
    }

    const onPlayListClick = (musicId) => {
        setClickedTab(tabType.PLAY)

        const selectedMusic = MUSIC_LIST.filter(music => {
            return music.id === musicId
        })[0]
        setPlayingMusic(selectedMusic)

        audio.pause()
        const newAudio = new Audio(selectedMusic.audio)
        setAudio(newAudio)
        newAudio.play()
        setIsPlaying(true)
    }

    const onPlayButtonClick = () => {
        if(isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
            audio.play()
            setIsPlaying(true)
        }
    }

    return (
        <div className="play-area-container">
            <ul className="tabs">
                <li
                    className={clickedTab === tabType.LIST ? "clicked-tab" : ""}
                    onClick={() => setClickedTab(tabType.LIST)}
                >재생 목록</li>
                <li
                    className={clickedTab === tabType.PLAY ? "clicked-tab" : ""}
                    onClick={() => setClickedTab(tabType.PLAY)}
                >재생 화면</li>
            </ul>
            {clickedTab === tabType.PLAY
                ? <>
                    <div className="album-cover-wrap">
                        <img src={playingMusic
                            ? `${playingMusic.image}`
                            : `${no_image}`
                        } />
                    </div>
                    <div className="played-music-info">
                        {playingMusic
                            ? <>
                                <p className="title">{playingMusic.title}</p>
                                <p className="artist">{playingMusic.artist}</p>
                            </>
                            : <p className="artist">재생 중인 음악이 없습니다.</p>
                        }
                    </div>
                    <div className="lyrics">
                        {playingMusic
                            ? `${playingMusic.lyrics}`
                            : ""
                        }
                    </div>
                </>
                : <ul className="play-list-wrap">
                    <li className="play-list">
                        <span className="title">제목</span>
                        <span className="artist">아티스트</span>
                    </li>
                    {playList.length > 0
                        ? <>
                            {playList.map((music, index) => {
                                return(
                                    <li key={index} className="play-list">
                                        <div
                                            className="music-info"
                                            onClick={() => onPlayListClick(music.id)}
                                        >
                                            <span className="title">{music.title}</span>
                                            <span className="artist">{music.artist}</span>
                                        </div>
                                        <div>
                                            <i
                                                className="remove-button material-symbols-outlined"
                                                onClick={() => onRemoveButtonClick(music.index)}
                                            >
                                                remove
                                            </i>
                                        </div>
                                    </li> 
                                )
                            })}
                        </>
                        : <li className="empty-play-list">
                            재생 목록을 추가해 주세요.
                        </li> 
                    }
                </ul>
            }
            <div className="audio-player-container">
                <audio
                    ref={audioPlayerRef}
                    src="something.mp3"
                    preload="auto"
                    muted
                ></audio>
                <i
                    className="play-button material-symbols-outlined"
                    onClick={onPlayButtonClick}
                >
                    {isPlaying
                        ? "pause"
                        : "play_arrow"
                    }
                </i>
            </div>
        </div>
    )
}

export default PlayArea