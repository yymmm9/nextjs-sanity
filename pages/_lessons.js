import axios from 'axios';
import Link from 'next/link';
import LessonTable from '@/components/ui/LessonTable';
// import sanityClient from '@/utils/client.js';
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import { useUser } from '@/utils/useUser';

class App extends React.Component{
    state={
        fetchedLessons
    }

    async componentDidMount(){

        const lessonsRes = await axios({
            metod: 'GET',
            url: 'http://localhost:1337/lessons',
        })

        console.log("App. Cdidmount", lessonsRes)

        const fetchedLessons = lessonsRes.data;

        console.log("App did mount")
    }

    render(){
        const {fetchedLessons} = this.state

        render(

            <main>
                <section>
                    <h1></h1>
                    <h2></h2>

                   <LessonTable lessons={fetchedLessons} />

                </section>
            </main>
      )
    }
}


const School = () => {
    const [postData, setPostData] = useState(null);
    const router = useRouter();
    const { userLoaded, user, session, userDetails, subscription } = useUser();

    useEffect(() => {
    if (!user) router.replace('/signin');
    }, [user]);
    
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
          .then((data) => setPostData(data))
          .catch(console.error)
      }, []);
    
      

};

export default School;
