//
// Contents of the task:
//
// 01. list all objects from 'machines' array as html elements.
// 02. each html element must have 'Machine name', 'Product', 'OS' & 'Status' values displayed on the page.
// 03. Instead of displaying 'Product' abbreviations, display full product names.
// 04. 'double-clicking' the html element must update the list and only show the child machines of the selected element.(if machine 'ID' matches with another machine's 'Parent-ID', it means that they are related)
// 05. the machines with 'unreachable' status must be disabled(grayed out & not clickable).
// 
// TIP: The code/solutions must be universal, so do not focus on these specific objects & values, imagine you have many objects like these.




var main=document.querySelector(".main");

var machines = [
    {
    "Machine": "12.64.240.11:4000",
    "Machine name": "Mac",
    "Status": "unreachable",
    "ID": "9828039216",
    "Parent-ID": "2497468915",
    "Product": "EMS", // Enterprise Multi Server
    "OS": "macOS 10.15.7"
    },
    {
    "Machine": "192.168.168.4:4000",
    "Machine name": "Room9-Main",
    "Status": "running",
    "ID": "9738285316",
    "Parent-ID": "2497468915",
    "Product": "MS", // Multi Server
    "OS": "Ubuntu 20.04 LTS"
    },
    {
    "Machine": "12.64.242.20:4000",
    "Machine name": "Dev-Linux",
    "Status": "unreachable",
    "ID": "8735056776",
    "Parent-ID": "9738285316",
    "Product": "D", // Desktop
    "OS": "Ubuntu 16.04.7 LTS"
    }
]



for(var i=0;i<machines.length;i++){
    var box=document.createElement("div")
   
    box.classList.add("box");
    var imgDiv=document.createElement("div");
    imgDiv.style.display="flex";
    imgDiv.style.justifyContent="center";
    
    var img=document.createElement("img");
    imgDiv.appendChild(img)

    img.src="./images/computer.webp";
    main.appendChild(box);
    box.appendChild(imgDiv);
   
        var mashineName=document.createElement("p");

        mashineName.innerHTML=machines[i]["Machine name"];
        box.appendChild(mashineName);
        var product=document.createElement("p");
        product.innerHTML=machines[i].Product;
        box.appendChild(product)
        var Os=document.createElement("p");
        Os.innerHTML=machines[i].OS;
        box.appendChild(Os)
        var mashineStatus=document.createElement("p");
        mashineStatus.innerHTML=machines[i].Status;
        box.appendChild(mashineStatus)
    

       
}


for(let z=0;z<main.children.length;z++){
  
    main.children[z].addEventListener("dblclick",()=>{
       
            
        if(main.children[z].children[4].textContent=="unreachable"){
            return false;
        }
        for(let k=0;k<machines.length;k++){
            for(let u=0;u<machines.length;u++){
               
                if((machines[k].ID==machines[u]["Parent-ID"]) && (machines[k].OS==main.children[z].children[3].textContent) ){
                   
                   for(let t=0;t<main.children.length;t++){
                    if(t!==k){
                        main.children[t].style.display="none"
                    }
                   }
                  
                }
            }
           
            
           
        }
       
        
    })
}
