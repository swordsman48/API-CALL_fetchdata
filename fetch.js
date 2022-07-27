//PROMISE - 
//Promise is used to create an API call using fetch() inbuilt method which returns the promise.

//Doubt 1. Tracing of the program. res - resolve rej - reject
// If the error occurcs or the program fails then the control will directly go to the catch block and then to the 'then' block.
// function fetchData(){
    
//     let promise = new Promise((res,rej)=>{
//         rej('It failed to handel the code.');
//     });

//     return promise;
// }


// fetchData().then((data)=>{
//     console.log(data);
// }).catch((e) =>{
//     console.log('Oops it also failed. ' +e);
// })

//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

// function fetchData(){
    
//     let promise = new Promise((res,rej)=>{
//         res('It failed to handel the code.');
//     });

//     return promise;
// }

// fetchData().then((data)=> 'My name is Khan Sir')
// .then((data)=>{
//     console.log(data);
// })
// .catch((e)=> 'The error is handeled!!')
// .then((data)=>{
//     console.log(data);
// })

class FetchData {

    Image_array = [];

    constructor() {
        this.div = document.getElementById('select-this')
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(data => data.json())
        .then(data => {
            this.Image_array = data;

            // console.log(this.Image_array);
            // this.Image_array.forEach(element => {
            //     console.log(element);
            // });

            this.creating_HTML();
        })
        .catch(e=> console.log(e));
        
    }

    creating_HTML(){

        // console.log(this.Image_array[0].title);
        // this.Image_array.forEach(ele =>{
        //     console.log(ele.id);
        //     console.log(ele.title);
        // })
        // for(var i=0;i<500;i++){
        //     console.log(this.Image_array[i].id);
        //     console.log(this.Image_array[i].title);
        // }

        const each_ele = this.Image_array.map(post =>{
            // console.log(post.title);

            if(post.id < 5000){

            return `
                <div class="col-lg-3 col-11">

                    <div style="background-color: #eee">
                        <h3>Post ID : ${post.id}</h3>
                        <h3>Album ID : ${post.albumId}</h3>
                    </div>
                    <a href="${post.url}" target="_blank">
                        <img src="${post.thumbnailUrl}" style="border: 2px solid black" />
                    </a> 
                </div>
            `;
            }
            else{
                return;
            }
        })
        .join('');

        this.div.innerHTML = each_ele;
                
    }
    
}
const p = new FetchData();

//How to set a limit to the map.
//Why there is a need to write .join('')
//