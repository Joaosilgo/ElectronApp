
const os = require('os');
const shell = require('electron').shell;



//Online/Offline Event Detection


const onlineStatus = () => {
  //window.alert(navigator.onLine ? 'online' : 'offline')
  console.log(navigator.onLine ? 'online' : 'offline');
}

window.addEventListener('online', onlineStatus)
window.addEventListener('offline', onlineStatus)

onlineStatus();



//Notification 


if (Notification) {
  const sendNotification = (title, body) => {
    const myNotification = new Notification(title, {
      body: body,
      icon: './Assets/img/react-logo.png',
      badge: './Assets/img/react-logo.png'
    })



    myNotification.onclick = () => {
      console.log('Notification clicked')
    }
  }

  sendNotification('Hey There', 'Body');


}

console.log(process)






const Processor = process.env.PROCESSOR_IDENTIFIER;
const Arch = process.arch;

const Computer = process.env.COMPUTERNAME;
const Memorytotal = process.getSystemMemoryInfo().total;
const Memoryfree = process.getSystemMemoryInfo().free;
const MemoryUsage = Memorytotal - Memoryfree;



document.getElementById('Processor').innerText = Processor;
document.getElementById('Arch').innerText = Arch;
document.getElementById('Computer').innerText = Computer;


document.getElementById('Memorytotal').innerText = Memorytotal
document.getElementById('Memoryfree').innerText = Memoryfree
document.getElementById('MemoryUsage').innerText = MemoryUsage





for (let i = 0; i < os.cpus().length; i++) {

  var e = document.createElement("TR");


  e.innerHTML = "<td id='Model" + i + "' > </td> <td  id='Speed" + i + "'></td> <td id='UserMode" + i + "'> </td> <td id='NiceMode" + i + "'></td> <td id='SysMode" + i + "'></td>";
  document.getElementById("cpu").appendChild(e);

}



function getCpu() {
  const cpus = os.cpus();


  for (let i = 0; i < cpus.length; i++) {

    //console.log(getCpuTimes(cpus[i])[0]);

    /*
    
    
      var table = document.getElementById("cpuTable");
      var row = table.insertRow(0);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = getCpuTimes(cpus[i])[0];
      cell2.innerHTML = getCpuTimes(cpus[i])[1];
      cell3.innerHTML = getCpuTimes(cpus[i])[2];
      cell4.innerHTML = getCpuTimes(cpus[i])[3];
      cell5.innerHTML = getCpuTimes(cpus[i])[4];
    
      */


    //const rows = new Array();
    //  rows[i] ='<tr> <td>'  +  getCpuTimes(cpus[i])[0] + '</td> <td >' + getCpuTimes(cpus[i])[1] + ' </td> <td>' + getCpuTimes(cpus[i])[2] + '</td> <td>' + getCpuTimes(cpus[i])[3] + '</td> <td>'+ getCpuTimes(cpus[i])[4] + '</td> </tr>';
    //var node = document.createElement("P");
    //var textnode = document.createTextNode("Water");
    //rows[i] = node.appendChild(textnode);
    //document.getElementById("output").appendChild= node.appendChild(textnode); 
    //document.getElementById("cpu").appendChild
    //var e = document.createElement("TR");
    //e.innerHTML = '<td  >' + getCpuTimes(cpus[i])[0] + "</td> <td>" + getCpuTimes(cpus[i])[1] + "</td> <td>" + getCpuTimes(cpus[i])[2] + "</td> <td>" + getCpuTimes(cpus[i])[3] + "</td> <td>" + getCpuTimes(cpus[i])[4] + "</td>";
    //document.getElementById("cpu").appendChild(e);

    document.getElementById("Model" + i).innerText = getCpuTimes(cpus[i])[0];
    document.getElementById("Speed" + i).innerText = getCpuTimes(cpus[i])[1];
    document.getElementById("UserMode" + i).innerText = getCpuTimes(cpus[i])[2];
    document.getElementById("NiceMode" + i).innerText = getCpuTimes(cpus[i])[3];
    document.getElementById("SysMode" + i).innerText = getCpuTimes(cpus[i])[4];

  }
  //
  function getCpuTimes(cpu) {
    return [
      cpu.model,
      cpu.speed,
      cpu.times.user,
      cpu.times.sys,
      cpu.times.idle,
    ];
  }






}


setInterval(getCpu, 500);





// Replace  with your JSON feed
fetch('https://api.github.com/users/Joaosilgo/repos')
  .then((response) => {




    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    // console.log(data)

    getRepo(data);
  })
  .catch((err) => {
    // Do something for an error here
  })





String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
  function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
      var t = typeof arguments[0];
      var key;
      var args = ("string" === t || "number" === t) ?
        Array.prototype.slice.call(arguments)
        : arguments[0];

      for (key in args) {
        if (args[key]) {
          str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
        str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), " ");
      }
    }

    return str;
  };

function getRepo(data) {


  for (var item of data) {

    var statusHTML = '';
    console.log(item);
    statusHTML = '<div class="item"><a  href="{html_url}" class="card" target="_blank" >  <div class="thumbnail" style="background-image: url(https://raw.githubusercontent.com/Joaosilgo/dummy_db/main/svg/_banner.svg);"></div><article><h6>{full_name}</h6><span>{language}</span></article></a></div>'.formatUnicorn(item);

    // document.getElementById("band").innerHTML=node;
    document.getElementById("band").insertAdjacentHTML("beforeend", statusHTML)
  }
}




document.body.addEventListener('click', event => {
  if (event.target.tagName.toLowerCase() === 'a') {
    event.preventDefault();
    shell.openExternal(event.target.href);
  }
});

