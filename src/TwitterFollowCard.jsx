import { useState } from "react"

export function TwitterFollowCard({ children, userName, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img
            className="tw-followCard-avatar"
            alt="Avatar de vite"
            src="https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/vite-es-ahora-el-paquete-de-activos-de-frontend-por-defecto-para-las-aplicaciones-de-laravel.jpg" />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-infoUserName">@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}