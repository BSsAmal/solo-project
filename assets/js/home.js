


function Dogs(title,image,desc){

this.title = title
this.image=image
this.desc=desc
}

var dogs=[]
const dog1= new Dogs('my name is Harry!',"../assets/image/dog10.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris")
const dog2= new Dogs('My name is Riley',"../assets/image/dog11.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris")
const dog3= new Dogs('My name is Buster',"../assets/image/dog.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris")
const dog4= new Dogs('My name is Ned Stark',"../assets/image/dog2.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris")

dogs.push(dog1,dog2,dog3,dog4)

/*table of dogs*/

function showTheListOfDogs(){
    var listOfDogs=''
dogs.forEach(dogs => 
    listOfDogs+= `
        <tr class ="text-center">
        <td><img src=${dogs.image} class="img-fluid img-thumbnail w-50"></td>
        <td class="w-25 align-middle">${dogs.title}</td>
        <td class="w-25 align-middle">${dogs.desc}</td>
       
        <td class="w-25 align-middle"><button onclick= "showAdoptMe('${dogs.title}')" class="btn btn-info">
        Adopt Me
        </button></td>
      </tr>`)
        
 
    
    document.getElementById("productList").innerHTML = listOfDogs
}



/*form adoptation*/

function showAdoptMe(title) {
    document.getElementById("productList").innerHTML = ''
    var adoptionForm=`
 <form>       
<table class="form-style">
            <tr>
               <td>
                  <label>
                     Your name <span class="required">*</span>
                  </label>
               </td>
               <td>
                  <input type="text" name="name" class="long"/>
                  <span class="error" id="errorname"></span>
               </td>
            </tr>
            <tr>
               <td>
                  <label>
                     Your e-mail <span class="required">*</span>
                  </label>
               </td>
               <td>
                  <input type="email" name="email" class="long"/>
                  <span class="error" id="erroremail"></span>
               </td>
            </tr>

            <tr>
            <td>
               <label>
                  Your Identity Card <span class="required">*</span>
               </label>
            </td>
            <td>
               <input type="text" name="IdentityCard" class="long"/>
               <span class="error" id="errorfile"></span>
            </td>
         </tr>


    
            <tr>
               <td>
                  <label>
                     Message <span class="required">*</span>
                  </label>
               </td>
               <td>
                  <textarea name="message" class="long field-textarea"></textarea>
                  <span class="error" id="errormsg"></span>
               </td>
            </tr>

            <tr>
               <td></td>
               <td>
                  <input onclick="submitadb('${title}')" type="submit" value="submit">      
                  <input type="reset" value="reset"> 
               </td>
            </tr>
         </table>
   <form/>`
    document.getElementById("productList").innerHTML = adoptionForm
}
    


    

/*


    function submitadb(title){
         console.log(title)
       localStorage.setItem('dogs',JSON.stringify( [title]));
       if 
    }
       
  */ 














