import { useState } from "react"
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
    const [isPlaying, setIsPlaying] = useState(false)
    const [playingIndex, setPlayingIndex] = useState(null)

    audio.onended = () => {
        playNextMusic()
    }

    const playPrevMusic = () => {
        const prevMusicIndex = playingIndex - 1 < 0
            ? playList.length - 1
            : playingIndex - 1
        const prevMusic = playList[prevMusicIndex]

        audio.pause()
        setPlayingIndex(prevMusicIndex)
        setPlayingMusic(prevMusic)
        const newAudio = new Audio(prevMusic.audio)
        setAudio(newAudio)
        newAudio.play()
    }

    const playNextMusic = () => {
        console.log("playingIndex", playingIndex)
        console.log("length", playList.length)
        const nextMusicIndex = playingIndex + 1 >= playList.length
            ? 0
            : playingIndex + 1
        const nextMusic = playList[nextMusicIndex]

        audio.pause()
        setPlayingIndex(nextMusicIndex)
        setPlayingMusic(nextMusic)
        const newAudio = new Audio(nextMusic.audio)
        setAudio(newAudio)
        newAudio.play()
    }

    const onRemoveButtonClick = (musicIndex) => {
        setPlayList(playList.filter(music => music.index !== musicIndex))
    }

    const onPlayListClick = (musicId, index) => {
        setClickedTab(tabType.PLAY)
        setPlayingIndex(index)

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
                >?????? ??????</li>
                <li
                    className={clickedTab === tabType.PLAY ? "clicked-tab" : ""}
                    onClick={() => setClickedTab(tabType.PLAY)}
                >?????? ??????</li>
            </ul>
            {clickedTab === tabType.PLAY
                ? <>
                    <div className="album-cover-wrap">
                        <img src={playingMusic.id
                            ? `${playingMusic.image}`
                            : `${no_image}`
                        } />
                        {playingMusic.id
                            ? <div className="audio-player-container">
                                <i
                                    className="skip-button material-symbols-outlined"
                                    onClick={playPrevMusic}
                                >
                                    skip_previous
                                </i>
                                <i
                                    className="play-button material-symbols-outlined"
                                    onClick={onPlayButtonClick}
                                >
                                    {isPlaying
                                        ? "pause_circle"
                                        : "play_circle"
                                    }
                                </i>
                                <i
                                    className="skip-button material-symbols-outlined"
                                    onClick={playNextMusic}
                                >
                                    skip_next
                                </i>
                            </div>
                            : ""
                        }
                    </div>
                    <div className="played-music-info">
                        {playingMusic.id
                            ? <>
                                <p className="title">{playingMusic.title}</p>
                                <p className="artist">{playingMusic.artist}</p>
                            </>
                            : <p className="artist">?????? ?????? ????????? ????????????.</p>
                        }
                    </div>
                    <div className="lyrics">
                        {playingMusic.id
                            ? `${playingMusic.lyrics}`
                            : ""
                        }
                    </div>
                </>
                : <ul className="play-list-wrap">
                    <li className="play-list">
                        <div className="music-info">
                            <span className="title">??????</span>
                            <span className="artist">????????????</span>
                        </div>
                        <div>
                            <i className="remove-button material-symbols-outlined">
                                remove
                            </i>
                        </div>
                    </li>
                    {playList.length > 0
                        ? <>
                            {playList.map((music, index) => {
                                return(
                                    <li key={index} className="play-list">
                                        <div
                                            className={isPlaying && index === playingIndex
                                                ? "playing music-info"
                                                : "music-info"
                                            }
                                            onClick={() => onPlayListClick(music.id, index)}
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
                            ?????? ????????? ????????? ?????????.
                        </li> 
                    }
                </ul>
            }
        </div>
    )
}

export default PlayArea