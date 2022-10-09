import musicList from "../databases/musicList"
import "./MusicList.css"

function MusicList() {
    return (
        <ul className="music-list-container">
            {musicList.map(music => {
                return (
                    <li className="music-list">
                        <div className="thumb-wrap">
                            <img src={music.image} />
                        </div>
                        <div className="music-info">
                            <p className="info-title">{music.title}</p>
                            <p className="info-artist">{music.artist}</p>
                        </div>
                        <span className="add-icon material-symbols-outlined">
                            playlist_add
                        </span>
                    </li> 
                )
            })}
        </ul>
    )
}

export default MusicList