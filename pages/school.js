import Link from 'next/link';
import sanityClient from '@/utils/client.js'

import { useState, useEffect } from 'react';
import Logo from '@/components/icons/Logo';
import { useUser } from '@/utils/useUser';  
import { useRouter } from 'next/router';

const School = () => {
    // const [postData, setPost] = useState(null);
    // const router = useRouter();
    //   useEffect(()=>{
    //       sanityClient.fetch(`*[_type == "post"]{
    //           title,
    //           slug,
    //           mainImage{
    //               asset->{
    //                   _id,
    //                   url
    //               },
    //               alt
    //           }
    //       }`)
    //       .then((data) => setPost(data))
    //       .catch(console.error)
    //   }, []);
    
      return(
          <main>
              <section>
                  <h1></h1>
                  <h2></h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     
                  </div>
              </section>
          </main>
    )

};

export default School;
