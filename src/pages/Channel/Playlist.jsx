import React from 'react';
// import { PlaylistCard } from '../../components/playlist/PlaylistCard';

const Playlist = () => {
    const playlists = [
        {
            id: 1,
            title: 'React Tutorials Playlist',
            videosCount: 10,
            thumbnail: 'https://picsum.photos/400/300?random=5',
            author: 'Amit Sharma',
            avatar: 'https://picsum.photos/50/50?random=1',
        },
        {
            id: 2,
            title: 'Web Development Basics',
            videosCount: 15,
            thumbnail: 'https://picsum.photos/400/300?random=6',
            author: 'John Doe',
            avatar: 'https://picsum.photos/50/50?random=2',
        },
        {
            id: 1,
            title: 'React Tutorials Playlist',
            videosCount: 10,
            thumbnail: 'https://picsum.photos/400/300?random=5',
            author: 'Amit Sharma',
            avatar: 'https://picsum.photos/50/50?random=1',
        },
        {
            id: 2,
            title: 'Web Development Basics',
            videosCount: 15,
            thumbnail: 'https://picsum.photos/400/300?random=6',
            author: 'John Doe',
            avatar: 'https://picsum.photos/50/50?random=2',
        },
        {
            id: 1,
            title: 'React Tutorials Playlist',
            videosCount: 10,
            thumbnail: 'https://picsum.photos/400/300?random=5',
            author: 'Amit Sharma',
            avatar: 'https://picsum.photos/50/50?random=1',
        },
        {
            id: 2,
            title: 'Web Development Basics',
            videosCount: 15,
            thumbnail: 'https://picsum.photos/400/300?random=6',
            author: 'John Doe',
            avatar: 'https://picsum.photos/50/50?random=2',
        },
        // Add more playlists as needed
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* {playlists.map((playlist) => (
                <PlaylistCard
                    key={playlist.id}
                    title={playlist.title}
                    author={playlist.author}
                    videosCount={playlist.videosCount}
                    thumbnail={playlist.thumbnail}
                    avatar={playlist.avatar}
                />
            ))} */}
            {playlists.map((playlist) => (<div>
                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={playlist.thumbnail}
                        alt={playlist.title}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
                    />
                </div>
                <div class="relative h-[80px] flex items-center bg-white/10 backdrop-blur-lg p-4 text-white">
                    <div class="flex justify-between w-full">
                        <div class="flex flex-col">
                            <p class="text-lg font-bold">Playlist</p>
                            <p class="text-sm opacity-80">100K Views • 18 hours ago</p>
                        </div>
                        <div class="text-right text-sm opacity-80">
                            <p>32 videos</p>
                        </div>
                    </div>
                </div>

            </div>))}
        </div>
    );
};

export default Playlist;
