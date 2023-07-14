import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'notghostmx',
        name: 'NotGhostMX',
        isFollowing: true
    },
    {
        userName: 'legitghost',
        name: 'LegitGhost',
        isFollowing: false
    }
]

export function App() {
    
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => {
                    return (
                        <TwitterFollowCard
                            key= {userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}