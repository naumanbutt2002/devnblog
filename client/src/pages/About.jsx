import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About DevN Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
             Welcome to DevN Blog! This blog 
             is a personal project where I share my journey as a passionate 22-year-old entrepreneur
              and a Software Engineer eager to create impactful solutions through technology.
               With a strong foundation in programming and AI, I am on a mission to make a difference in the tech world.


            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as mobile app development, software engineering, and programming
              languages.and the lessons I've learned along the way.
               From my experiences in software development to building my startups,
                , this blog
                 captures my passion for innovation and continuous learning.
            </p>

            <p>
              Feel free to leave comments, engage with other readers, and share your thoughts. I believe in the power of community and that learning together can help us all grow and achieve our goals. Let's connect, learn, and inspire each other!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
