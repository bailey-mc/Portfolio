console.log('hi!');

$(() =>{

   

    const $secretlink =$('li.secret').hide(0)
  //==========CLICK ME BUTTON====//
  $('.secretbutton').on('click', () => {
    $secretlink.show(3000)

  })

    //=========CAROUSEL=============//
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

const $hoverImage = $('#hover-image1').hide(0)


$('#resume-item1').hover(
    () => {

        $hoverImage.show(3000).hide(3000)
        
        
        }
) 

})
