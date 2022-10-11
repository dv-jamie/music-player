import MUSIC_LIST from "../databases/musicList"
import "./MusicList.css"

function MusicList({ playList, setPlayList, setClickedTab }) {
    const onAddIconClick = (musicId) => {
        MUSIC_LIST.map(music => {
            if(music.id === musicId) {
                const prevMusic = playList[playList.length - 1]
                const prevIndex = prevMusic ? prevMusic.index : 0
                const selectedMusic = {
                    index: prevIndex + 1,
                    ...music
                }
                setPlayList([...playList, selectedMusic])
                return
            }
        })
        setClickedTab("LIST")
    }

    return (
        <ul className="music-list-container">
            {MUSIC_LIST.map(music => {
                return (
                    <li key={music.id} className="music-list">
                        <div className="thumb-wrap">
                            <img src={music.image} />
                        </div>
                        <div className="music-info">
                            <p className="info-title">{music.title}</p>
                            <p className="info-artist">{music.artist}</p>
                        </div>
                        <i
                            className="add-icon material-symbols-outlined"
                            onClick={() => onAddIconClick(music.id)}
                        >
                            playlist_add
                        </i>
                    </li> 
                )
            })}
        </ul>
    )
}

export default MusicList