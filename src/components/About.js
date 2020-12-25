import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import northShore from "../northShore.jpg"
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"]{
            name,
            "bio": bio[0].children[0].text,
            "authorImage": image.asset->url
        }`
            )
            .then((data) => setAuthor(data[0]))
            .catch(console.error);


    }, []);

    if (!author) return <div>Loading...</div>

    return (
        <main className="relative">
            <img
                src={northShore}
                alt="north shore"
                className="absolute w-full"
            />
            <div className="p-10 lg:pt-48 container mx-auto relative ">
                <img
                    src={urlFor(author.authorImage).url()}
                    className="rounded w-50 h-50 lg:w-64 h-64 mr-10"
                    alt={author.name}
                />
                <div className="p-5 lg:pt-5 container mx-auto relative "></div>
                <section className="bg-gray-900 rounded-lg opacity-80 shadow-2xl lg:flex p-20">
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-200 mb-4">
                            Hey there, I'm{" "}
                            <span className="text-green-50">{author.name}</span>
                        </h1>
                        <p className="text-green-50 text-lg">{author.bio}</p>
                    </div>
                </section>

            </div>
        </main>
    );
}