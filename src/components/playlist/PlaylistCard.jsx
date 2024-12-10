import React from "react";
import AvatarImage from "../Material Ui/Avatar";

const PlaylistCard = () => {
    const playlists = [
        {
            id: 1,
            title: "React Tutorials Playlist",
            videosCount: 10,
            thumbnail: "https://picsum.photos/400/300?random=5",
            author: "Amit Sharma",
            avatar: "https://picsum.photos/50/50?random=1",
        },
        {
            id: 2,
            title: "Web Development Basics",
            videosCount: 15,
            thumbnail: "https://picsum.photos/400/300?random=6",
            author: "John Doe",
            avatar: "https://picsum.photos/50/50?random=2",
        },
        {
            id: 3,
            title: "JavaScript Essentials",
            videosCount: 8,
            thumbnail: "https://picsum.photos/400/300?random=7",
            author: "Sara Lee",
            avatar: "https://picsum.photos/50/50?random=3",
        },
        {
            id: 4,
            title: "CSS Mastery",
            videosCount: 12,
            thumbnail: "https://picsum.photos/400/300?random=8",
            author: "Michael Roe",
            avatar: "https://picsum.photos/50/50?random=4",
        },
        {
            id: 2,
            title: "Web Development Basics",
            videosCount: 15,
            thumbnail: "https://picsum.photos/400/300?random=6",
            author: "John Doe",
            avatar: "https://picsum.photos/50/50?random=2",
        },
        {
            id: 3,
            title: "JavaScript Essentials",
            videosCount: 8,
            thumbnail: "https://picsum.photos/400/300?random=7",
            author: "Sara Lee",
            avatar: "https://picsum.photos/50/50?random=3",
        },
        {
            id: 4,
            title: "CSS Mastery",
            videosCount: 12,
            thumbnail: "https://picsum.photos/400/300?random=8",
            author: "Michael Roe",
            avatar: "https://picsum.photos/50/50?random=4",
        },
    ];

    // Extract the first playlist as featured
    const featuredPlaylist = playlists[0];

    return (
        <div className="w-full text-white flex flex-col lg:flex-row min-h-[85vh] gap-6 md:p-4">
            {/* Sidebar for Featured Playlist */}
            <aside className="lg:w-3/12 w-full bg-[#a5a781] rounded-lg p-6 flex flex-col items-center">
                <div className="w-full max-w-[312px]">
                    <img
                        src={featuredPlaylist.thumbnail}
                        alt={featuredPlaylist.title}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                </div>
                <div className="py-4 text-center">
                    <h2 className="text-lg md:text-xl font-bold">{featuredPlaylist.title}</h2>
                    <div className="flex gap-2 items-center justify-center py-2">
                        <AvatarImage
                            src={featuredPlaylist.avatar}
                            size="40px"
                        />
                        <span className="text-sm md:text-base">{featuredPlaylist.author}</span>
                    </div>
                    <p className="text-xs md:text-sm">
                        Explore {featuredPlaylist.videosCount} exciting videos in this playlist!
                    </p>
                </div>
            </aside>

            {/* Main Section for Playlist List */}
            <main className="flex-1">
                <div className="flex flex-col gap-4">
                    {playlists.map((playlist) => (
                        <div
                            key={playlist.id}
                            className="flex md:flex-row gap-4 md:p-4 pb-3 border-b border-gray-700"
                        >
                            <img
                                src={playlist.thumbnail}
                                alt={playlist.title}
                                className="md:w-40 md:h-24 rounded-lg object-cover sm:min-w-[170px] w-[120px] h-[100px]"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-base md:text-lg font-semibold">{playlist.title}</h3>
                                <p className="text-gray-400 text-xs md:text-sm pt-2">
                                    100K Views
                                    •
                                    18 hours ago
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default PlaylistCard;
