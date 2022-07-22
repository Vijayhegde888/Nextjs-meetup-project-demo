import {MongoClient} from 'mongodb'

// api POST - new-meetup 

async function handler(req,res){
    if(req.method === "POST"){
        const data=req.body
    // const {image,title,address,description}=data

   const client=await  MongoClient.connect( "mongodb+srv://vijayhegde888:1234@cluster0.gzy7x.mongodb.net/?retryWrites=true&w=majority")
        const db= client.db();
        const meetUpscollection =db.collection('meetups');
        const result =await meetUpscollection.insertOne({data})
        console.log('result',result);
        client.close();
        res.status(201).json({message:'meetup is created'})
        


    }

}
export default handler;