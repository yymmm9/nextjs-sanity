import Link from 'next/link';
import sanityClient from '@/utils/client.js';
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

const School = () => {
    const [postData, setPost] = useState(null);
    const router = useRouter();
    
      useEffect(()=>{
          sanityClient.fetch(`*[_type == "post"]{
              title,
              slug,
              mainImage{
                  asset->{
                      _id,
                      url
                  },
                  alt
              }
          }`)
          .then((data) => setPost(data))
          .catch(console.error)
      }, []);
    
      return(
          <main>
              <section>
                  <h1></h1>
                  <h2></h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {postData && postData.map((post, index) => (
                      <article>
                          <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative rounded shadow" key={index}>
                                <img src={post.mainImage.asset.url} alt={post.mainImage.alt}
                                className="w-full h-full rounded-r object-cover absolute"/>
                                <span className="block relative h-full flex jusitify-end items-end pr-4 pb-4">
                                    <h3 className="">{post.title}</h3>
                                </span>
                            </span>
                          </Link>
                      </article>
                      ))}
                  </div>
              </section>
          </main>
    )

};

export default School;
