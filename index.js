/**
 * Created by mayan on 2017/7/12.
 */
// (function () {
//     var i=1;
//     function clock(){
//         i=i+1;
//         if(i===5){
//             i=1;
//         }
//     }
//     function change(){
//         var a=document.getElementById("transImageBox");
//         a.style.marginLeft=(1-i)*400+"px";
//     }
//     setInterval('change()',2000);
//     setInterval('clock()',3000);
// })();
    (function change() {
        var img = document.getElementsByClassName('img');
        // var btnLeft = document.getElementsByClassName('btn-left')[0];
        var btnRight = document.getElementsByClassName('btn-right')[0];
        for(var i=0; i<img.length; i++){
            btnRight.addEventListener('click', function () {
                    img[i].classList.add('img-hide');
                    // img.classList.remove('img-hide');
            });
        }
    })();




//     btnLeft.addEventListener('click',function () {
//         img[i].classList.add('img-hide');
//         img[i-1].classList.add('img-index');
//     })
// }
