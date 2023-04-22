//* Declare


const generate = document.querySelector(".generate");
const shown = document.querySelector(".willbeshown")
const copyButton = document.querySelector(".copy")





copyButton.addEventListener('click', function(){
    // getting the text content that we want to copy
    const content = shown.textContent;
    navigator.clipboard.writeText(content);
    navigator.clipboard.readText()
    // .then((copied) => {
    //     console.log(copied);
    // });
    const toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 10000,
      animation: false,
      customClass: 'animated slideInRight'
  });
  toast.fire({
    title: 'Copied to clipboard!',
    icon: 'success',
  })
})



const nums_lett_arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


let pass = ""

function passHazemn(){
    for (let i = 0; i < 7 ; i++){
      const randomRate = Math.floor(Math.random()*62)
      pass += nums_lett_arr[randomRate]
    }
    shown.innerText = `PL$${pass}$`
    pass = ""
  }



generate.addEventListener("click",function(e){
    e.preventDefault();
    passHazemn();
    
    
});


