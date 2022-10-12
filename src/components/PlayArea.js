import "./PlayArea.css"

const tabType = {
    PLAY: "PLAY",
    LIST: "LIST"
}

function PlayArea({ playList, setPlayList, clickedTab, setClickedTab }) {
    const onRemoveButtonClick = (musicIndex) => {
        setPlayList(playList.filter(music => music.index !== musicIndex))
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
                        <img src="https://image.bugsm.co.kr/album/images/500/40737/4073710.jpg" />
                    </div>
                    <div className="played-music-info">
                        <p className="title">제목</p>
                        <p className="artist">가수</p>
                    </div>
                    <div className="lyrics">{}</div>
                </>
                : <ul className="play-list-wrap">
                    <li className="play-list">
                        <span className="title">제목</span>
                        <span className="artist">아티스트</span>
                    </li>
                    {playList.map(music => {
                        return(
                            <li key={music.index} className="play-list">
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