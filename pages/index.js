// import { useEffect, useState } from 'react';
import {MongoClient} from 'mongodb'
import Head from 'next/head'
import { Fragment } from 'react'
import MeetupList from './../components/meetups/MeetupList'

function HomePage(props){
    // const[loadedMeetups,setLoadedMeetups]=useState([]);
    // useEffect(()=>{
    //         setLoadedMeetups(DUMMY_MEETUPS)
    // },[])
    return (
<Fragment>

            <Head>
                <title>Nextjs Meetups</title>
                <meta 
                name="description"
                content="Add your Own Meetup"
                
                />
            </Head>
         <MeetupList meetups={props.meetups} />
</Fragment>
        )
}
// export async function getServerSideProps(context){
//     const req=context.req;
//     const res=context.res;
//     return {
//         props:{
//                 meetups:DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps(){
    // fetch data here from api 
    const client=await  MongoClient.connect( "mongodb+srv://vijayhegde888:1234@cluster0.gzy7x.mongodb.net/?retryWrites=true&w=majority")
    const db= client.db();
    const meetUpscollection =db.collection('meetups');
    const meetups=await meetUpscollection.find().toArray();
    console.log(meetups,"meetups")
    client.close();
    return {

        props:{
            meetups:meetups.map(meetup=>({
                title:meetup.data.title,
                address:meetup.data.address,
                image:meetup.data.image,
                id:meetup._id.toString()

            }))
        },
        revalidate:1
    }

}
export default HomePage;