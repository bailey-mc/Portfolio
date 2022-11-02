console.log('hi!');

$(() =>{

   


    const $secretlink =$('li.secret').hide(0)
  //==========CLICK ME BUTTON====//
  $('.secretbutton').on('click', () => {
    $secretlink.show(3000)

  })

    //=========CAROUSEL=============//
    //carousel based off of class exercise on w03d01

    let currentImgIndex = 0; 
    const numOfImages = $('.carousel-images').children().length - 1

    //==========NEXT BUTTTON=============//
    
    $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
        if(currentImgIndex < numOfImages) {
            currentImgIndex ++
           } else {
            currentImgIndex = 0
           }
        // currentImgIndex++;
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
        
       })


//================PREV BUTTON=============//
$('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex > 0) {
        currentImgIndex --
      } else {
        currentImgIndex = numOfImages
      }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
   })
//===========END CAROUSEL=============//


//========HOVER IMAGES RESUME=============//

//=============GA STUDENT ================//
const $hoverImage = $('#hover-image1').hide(0)


$('#resume-item1').hover(
    () => {

        $hoverImage.show(5000)
        // .hide(3000)
        // $hoverImage.hide(0)
       

        
        }
) 



//============PRESCHOOL TEACHER=============//
const $hoverImage2 = $('#hover-image2').hide(0)


$('#resume-item2').hover(
    () => {

        $hoverImage2.show(5000)
        // .hide(3000)
        // $hoverImage2.hide(0)
       
        
        }
) 

//================FARMER MARKET=============//

const $hoverImage3 = $('#hover-image3').hide(0)


$('#resume-item3').hover(
    () => {

        $hoverImage3.show(3000)
        // .hide(3000)
        // $hoverImage3.hide(0)
       

        
        }
) 


//==============WRITING TUTOR==============//


const $hoverImage4 = $('#hover-image4').hide(0)


$('#resume-item4').hover(
    () => {

        $hoverImage4.show(3000)
        // .hide(3000)
        // $hoverImage4.hide(0)
        
        
        }
) 


//============UT STUDENT =================//

const $hoverImage5 = $('#hover-image5').hide(0)


$('#resume-item5').hover(
    () => {

        $hoverImage5.show(3000)
        // .hide(3000)
        // $hoverImage5.hide(0)
        
        
        }
) 


//===========END RESUME ================//



//============BIO===========//




//============END BIO===========//




//============CODING PROJECTS===========//

//=========MODAL----------//

//modal functions loosely based off of modal exercise in class

setTimeout (() => {
  $('#modal').css('display', 'block');
}, 500)

$('#close').click(function () {
  $('#modal').css('display', 'none')
})




//========= END MODAL----------//


//=========SLIDE TOGGLE TEXT=========//

$( "#codeimage1" ).click(function() {
    $( "#hovertext1" ).slideToggle( "slow", function() {
   
    });
  });

  //this and all following slide toggle functions based off of https://api.jquery.com/slideToggle/ demonstration

  $( "#codeimage2" ).click(function() {
    $( "#hovertext2" ).slideToggle( "slow", function() {
 
    });
  });

  $( "#codeimage3" ).click(function() {
    $( "#hovertext3" ).slideToggle( "slow", function() {
 
    });
  });

  $( "#codeimage4" ).click(function() {
    $( "#hovertext4" ).slideToggle( "slow", function() {
 
    });
  });


  //===========END CODE PROJECTS=======//

  //==========CREATIVE PROJECTS=======//


  $( "#creativeimage1" ).click(function() {
    $( "#creativehovertext1" ).slideToggle( "slow", function() {
 
    });
  });

  $( "#creativeimage2" ).click(function() {
    $( "#creativehovertext2" ).slideToggle( "slow", function() {
 
    });
  });

  $( "#creativeimage3" ).click(function() {
    $( "#creativehovertext3" ).slideToggle( "slow", function() {
 
    });
  });

  $( "#creativeimage4" ).click(function() {
    $( "#creativehovertext4" ).slideToggle( "slow", function() {
 
    });
  });



  //==========END CREATIVE PROJECTS=======//


})
