import React, { useState, useEffect } from "react";
import AvatarImage from "../Material Ui/Avatar";

export function VideoCard({ title, author, views, time, thumbnail, avatar }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust time to your loading scenario

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-2 p-4 animate-pulse">
        <div className="relative aspect-video bg-gray-300 dark:bg-gray-700 h-full rounded-md" />
        <div className="flex gap-3 mt-3">
          <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div className="flex flex-col gap-1">
            <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="flex gap-3">
        <AvatarImage src={avatar} alt={author} />
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-400">{author}</p>
          <div className="text-sm text-gray-400">
            <span>{views}</span>
            <span className="mx-1">•</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
