export default function AlienPlant ({stage}) {

    let photoArray = ["https://drive.google.com/file/d/1-n4AUZ9vHD2Q0BykHRp3KSExOR6wx3p-/view?usp=sharing", "https://media.istockphoto.com/photos/apple-seeds-isolated-over-white-picture-id1029888184?k=20&m=1029888184&s=612x612&w=0&h=RkbKIBWhzsMoEYwOhZJJOGUfRE-lDQH5uyTQwf8JkL4=", "https://basmati.com/sites/default/files/styles/large/public/2020-08/shutterstock_560935330.jpg?itok=GCz_E4AB"]; 
    console.log(stage)
        return(
            <div>
              <img src={photoArray[stage]} alt="Plant in various stages" width="500" height="600"></img>  

            </div>
        )



}