$(document).ready(function () {
  var isMale = $.ajax({
    url: "data.json",
    type: "GET",
    success: function (response) {
      console.log(response);

      // src={
      //   response[index]..pic_url
      //     ? response[index]..pic_url
      //     : response[index]..gender === "Male"
      //     ? imgMale
      //     : imgFemale
      // }

      //   schedule: (function() {
      //     if (paramsObj.isfirst)
      //         return firstSched;
      //     else if (paramsObj.issecond)
      //         return secondSched;
      //     else if (paramsObj.isthird)
      //         return thirdSched;
      //     else
      //         return undefined;

      // })();

      // "
      //       ${ if (response[index].pic_url) {
      //         response[index].pic_url
      //       } else if { response[index].gender === "Male"

      //       }   }"

      // "
      //       ${ ifresponse[index].pic_url
      //         response[index].pic_url
      //         : response[index].gender === "Female"
      //         ? $(img).attr("src", "imgMale.png")
      //         : $(img).attr("src", "imgFemale.png")    }"

      {
        /* <img src='https://www.w3schools.com/html/pic_trulli.jpg' id='my_img'></img> */
      }

      for (let index = 0; index < 20; index++) {
        $("#output").append(`
  
  <div class="container">

 
  <div class="col"></div>
  <div class="col-11">
          <div class="card" >
          <div class="cardtop">
          ${response[index].title} 
        </div class="x"> 
      

          <img class="image" id="img1" src="${
            response[index].pic_url
              ? response[index].pic_url
              : response[index].gender === "Male"
              ? "./assets/imgMale.png"
              : "https://www.w3schools.com/howto/img_avatar2.png"
          }" />  
   

          <div class="card_body">
            ${
              response[index].email === null
                ? ""
                : `<p class="card-text"> <b> mail:
                 </b> <a  href="mailto:${response[index].email}?subject=Hi, ${response[index].title}">  ${response[index].email} </a> </p> `
            } 
             <p class="card-text"> <b>city: </b> ${response[index].city}</p>
             <p class="card-text"> <b>gender: </b> ${response[index].gender}</p>


             <div class="car">
                    ${
                      response[index].car === true
                        ? '<img class="carIcon" src="./assets/car.png" />'
                        : ""
                    }
                  </div>
                  </div>
        
          </div>
        </div>
  
  </div>
  <div class="col"></div>



 
  </div>
  
  
  
         
  
                        `);
      }
    },
  });
});

// ${ ${response[index].pic_url} ? ${response[index].pic_url} : ${response[index].gender === 'Male'} ? 'j' : 'isFemale'} " class="image"
