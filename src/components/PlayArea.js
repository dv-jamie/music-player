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
    setPlayingMusic
}) {
    const onRemoveButtonClick = (musicIndex) => {
        setPlayList(playList.filter(music => music.index !== musicIndex))
    }

    const onPlayListClick = (musicId) => {
        MUSIC_LIST.map(music => {
            if(music.id === musicId) {
                setPlayingMusic(music)
                return
            }
        })
        setClickedTab(tabType.PLAY)
    }

    return (
        <div className="play-area-container">
            <ul className="tabs">
                <li
                    className={clickedTab === tabType.PLAY ? "clicked-tab" : ""}
                    onClick={() => setClickedTab(tabType.PLAY)}
                >재생 화면</li>
                <li
                    className={clickedTab === tabType.LIST ? "clicked-tab" : ""}
                    onClick={() => setClickedTab(tabType.LIST)}
                >재생 목록</li>
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
                            {playList.map(music => {
                                return(
                                    <li
                                        key={music.index}
                                        className="play-list"
                                        onClick={() => onPlayListClick(music.id)}
                                    >
                                        <span className="title">{music.title}</span>
                                        <span className="artist">{music.artist}</span>
                                        <i
                                            className="material-symbols-outlined"
                                            onClick={() => onRemoveButtonClick(music.index)}
                                        >
                                            remove
                                        </i>
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
                <button className="play-button">
                    <i className="play-button material-symbols-outlined">play_arrow</i>
                </button>
            </div>
        </div>
    )
}

export default PlayArea