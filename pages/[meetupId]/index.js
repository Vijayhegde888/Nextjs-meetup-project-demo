import { Fragment } from "react";
import {MongoClient,ObjectId} from 'mongodb'
import Head from 'next/head'

import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails(props){
    console.log('props',props)
    return (
        <Fragment>
            <Head>

            <title>{props.meetupData.title}</title>
                <meta 
                name="description"
                content={props.meetupData.description}
                
                />
                </Head>
            <MeetupDetail
             image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
            />
        </Fragment>
    )
    }
    export async function getStaticPaths(){

        const client=await  MongoClient.connect( "mongodb+srv://vijayhegde888:1234@cluster0.gzy7x.mongodb.net/?retryWrites=true&w=majority")
        const db= client.db();
        const meetUpscollection =db.collection('meetups');
        const meetups=await meetUpscollection.find({},{_id:1}).toArray();
        client.close();
        return {
            fallback:"blocking",
            paths:meetups.map(meatup=>({
                    params:{
                        meetupId:meatup._id.toString()
                    }  
                
                }))
                                
            
        }
    }
    export async function getStaticProps(context){

        const meetupId= context.params.meetupId
        const client=await  MongoClient.connect( "mongodb+srv://vijayhegde888:1234@cluster0.gzy7x.mongodb.net/?retryWrites=true&w=majority")
        const db= client.db();
        const meetUpscollection =db.collection('meetups');
        const selectedMeetup=await meetUpscollection.findOne({_id:ObjectId(meetupId)})

        

        // fetch data 
        return {
            props:{
                meetupData:{
                    id:selectedMeetup._id.toString(),
                    title:selectedMeetup.data.title,
                    address:selectedMeetup.data.address,
                    image:selectedMeetup.data.image,
                    description:selectedMeetup.data.description
                }
            }
        }
    }
    export default MeetupDetails;