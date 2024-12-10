import React from "react";
import AvatarImage from "../Material Ui/Avatar";

export function VideoCard({ title, author, views, time, thumbnail, avatar }) {
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
