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


export default School;
