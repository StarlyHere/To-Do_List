
document.getElementById('btn').addEventListener('click',function(){
    let input = document.getElementById('input').value;


    //creating list elements
    let elem=document.createElement('li');
    let btn1=document.createElement('button');
    let btn2=document.createElement('button');
    let btn3=document.createElement('button');
    btn1.innerText="Done";
    btn2.innerText="Delete";
    btn3.innerText="Edit";
    elem.innerText=input;
    elem.setAttribute("readonly" , "readonly");
    let ul=document.querySelector('ul');

   //appending the created elements in html

    ul.appendChild(elem);
    elem.appendChild(btn1);
    elem.appendChild(btn2);
    elem.appendChild(btn3);

    //styling the buttons
    btn1.style.marginLeft="5%";
    btn2.style.marginLeft="5%";
    btn3.style.marginLeft="5%";
    btn1.style.marginTop="3px";
    btn2.style.marginTop="3px";
    elem.style.fontSize="30px";
    elem.style.color="#330d00";
    btn1.style.color="#330d00";
    btn1.style.backgroundColor="#009933";
    btn2.style.backgroundColor="#802000";
   
    

    //adding functionality to the buttons

    btn1.addEventListener('click',function(){
        elem.style.textDecoration="line-through";
    })
    btn2.addEventListener('click',function(){
        elem.remove() ;
    })
    btn3.addEventListener('click',function(){
        if(btn3.innerText.toLowerCase()=="edit"){
            elem.contentEditable="true";
            btn3.innerText="Save";
        }else{
            elem.contentEditable="false";
            btn3.innerText="Edit";
        }
       

    })

    document.getElementById('input').value='';

})
