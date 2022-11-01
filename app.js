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





})
