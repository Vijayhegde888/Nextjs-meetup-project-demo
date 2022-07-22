import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetup(){
    const onAddMeetup=async (enteredMeetupData)=>{
        console.log(enteredMeetupData);
            const response =await fetch('/api/new-meetup-api',{
                method:'POST',
                body:JSON.stringify(enteredMeetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data=await response.json();
            console.log('data from post api',data)
    
        }
return (
    <div>
       <NewMeetupForm onAddMeetup={onAddMeetup}/>
    </div>
)
}

export default NewMeetup;