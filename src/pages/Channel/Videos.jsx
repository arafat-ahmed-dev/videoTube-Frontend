import React from 'react';
import { VideoCard } from '../../components/videos/videocard';

const videos = [
    {
        "title": "Master JavaScript in 30 Days | Complete Guide",
        "author": "Amit Sharma",
        "views": "150K Views",
        "time": "2 days ago",
        "thumbnail": "https://picsum.photos/200/300",
        "avatar": "https://picsum.photos/200/300"
    },
    {
        "title": "Introduction to Vue.js | Beginner Tutorial",
        "author": "Priya Verma",
        "views": "80K Views",
        "time": "5 hours ago",
        "thumbnail": "https://picsum.photos/200/301",
        "avatar": "https://picsum.photos/200/301"
    },
    {
        "title": "Building a Portfolio with HTML & CSS",
        "author": "Ravi Kumar",
        "views": "120K Views",
        "time": "1 day ago",
        "thumbnail": "https://picsum.photos/200/302",
        "avatar": "https://picsum.photos/200/302"
    },
    {
        "title": "React vs Angular | Which One to Choose?",
        "author": "Sonal Patel",
        "views": "200K Views",
        "time": "3 days ago",
        "thumbnail": "https://picsum.photos/200/303",
        "avatar": "https://picsum.photos/200/303"
    },
    {
        "title": "Understanding Node.js | Backend Development",
        "author": "Deepak Singh",
        "views": "95K Views",
        "time": "12 hours ago",
        "thumbnail": "https://picsum.photos/200/304",
        "avatar": "https://picsum.photos/200/304"
    },
    {
        "title": "Learn TypeScript for Beginners | Full Course",
        "author": "Vikram Singh",
        "views": "220K Views",
        "time": "1 week ago",
        "thumbnail": "https://picsum.photos/200/305",
        "avatar": "https://picsum.photos/200/305"
    },
    {
        "title": "JavaScript Asynchronous Programming | Understanding Promises",
        "author": "Sandeep Choudhary",
        "views": "180K Views",
        "time": "4 days ago",
        "thumbnail": "https://picsum.photos/200/306",
        "avatar": "https://picsum.photos/200/306"
    },
    {
        "title": "Web Development with Python | Flask Tutorial",
        "author": "Neha Gupta",
        "views": "110K Views",
        "time": "6 hours ago",
        "thumbnail": "https://picsum.photos/200/307",
        "avatar": "https://picsum.photos/200/307"
    },
    {
        "title": "CSS Grid Layout | Master Grid System",
        "author": "Anil Kumar",
        "views": "140K Views",
        "time": "3 days ago",
        "thumbnail": "https://picsum.photos/200/308",
        "avatar": "https://picsum.photos/200/308"
    },
    {
        "title": "Optimizing React Performance | Best Practices",
        "author": "Priya Rani",
        "views": "160K Views",
        "time": "8 hours ago",
        "thumbnail": "https://picsum.photos/200/309",
        "avatar": "https://picsum.photos/200/309"
    },
    {
        "title": "Learn TypeScript for Beginners | Full Course",
        "author": "Vikram Singh",
        "views": "220K Views",
        "time": "1 week ago",
        "thumbnail": "https://picsum.photos/200/305",
        "avatar": "https://picsum.photos/200/305"
    },
    {
        "title": "Optimizing React Performance | Best Practices",
        "author": "Priya Rani",
        "views": "160K Views",
        "time": "8 hours ago",
        "thumbnail": "https://picsum.photos/200/309",
        "avatar": "https://picsum.photos/200/309"
    },
    {
        "title": "Learn TypeScript for Beginners | Full Course",
        "author": "Vikram Singh",
        "views": "220K Views",
        "time": "1 week ago",
        "thumbnail": "https://picsum.photos/200/305",
        "avatar": "https://picsum.photos/200/305"
    },
    {
        "title": "JavaScript Asynchronous Programming | Understanding Promises",
        "author": "Sandeep Choudhary",
        "views": "180K Views",
        "time": "4 days ago",
        "thumbnail": "https://picsum.photos/200/306",
        "avatar": "https://picsum.photos/200/306"
    },
    {
        "title": "Web Development with Python | Flask Tutorial",
        "author": "Neha Gupta",
        "views": "110K Views",
        "time": "6 hours ago",
        "thumbnail": "https://picsum.photos/200/307",
        "avatar": "https://picsum.photos/200/307"
    },
    {
        "title": "CSS Grid Layout | Master Grid System",
        "author": "Anil Kumar",
        "views": "140K Views",
        "time": "3 days ago",
        "thumbnail": "https://picsum.photos/200/308",
        "avatar": "https://picsum.photos/200/308"
    },
    {
        "title": "Optimizing React Performance | Best Practices",
        "author": "Priya Rani",
        "views": "160K Views",
        "time": "8 hours ago",
        "thumbnail": "https://picsum.photos/200/309",
        "avatar": "https://picsum.photos/200/309"
    }
]




export function Videos() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {videos.map((video, index) => (
                <VideoCard key={index} {...video} />
            ))}
        </div>
    );
}