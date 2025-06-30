let Pimage = document.querySelectorAll('section');

const ReloadComponent = () => {
    // Define the reload function
    setTimeout(()=>{
        window.location.reload();
    },5000)
};  
function animationFun(){
    let sections = document.querySelectorAll('section'); 
    // let element = document.querySelector('.element-container'); 
    let h1Font = document.querySelector('.font-text'); 
    let ServiceBox = document.querySelector('.sbox-container')
     
 

    window.onscroll = () => {
        let top = window.scrollY; 
        
        sections.forEach(sec => {  
        let offset = sec.offsetTop;  
        let height = sec.offsetHeight; 
        
        // Check if scrolling down
        if (top >= offset && top < offset + height) {
            //  sec.classList.add('show-animate');
            //  element.classList.add('element-animate');
            
            } 
        })  
      
    }

} 
setTimeout( () =>{
  animationFun()  
},1000)
  

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         ServiceBox.target.classList.add('box-animate');
//       }
//     });
//   }); 
      
  
  