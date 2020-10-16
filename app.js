


const os = require('os')


//Online/Offline Event Detection


const onlineStatus = () => {
    //window.alert(navigator.onLine ? 'online' : 'offline')
    console.log(navigator.onLine ? 'online' : 'offline');
  }

  window.addEventListener('online',  onlineStatus)
  window.addEventListener('offline',  onlineStatus)

  onlineStatus();



  //Notification 

  const sendNotification = (title, body) => {
  const myNotification = new Notification(title, {
    body: body
  })



  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
}

sendNotification('Hey There' , 'Body');




console.log(process)






const Processor = process.env.PROCESSOR_IDENTIFIER;
const Arch = process.arch;

const Computer = process.env.COMPUTERNAME;
const Memorytotal = process.getSystemMemoryInfo().total ;
const Memoryfree  = process.getSystemMemoryInfo().free  ;
const MemoryUsage = Memorytotal - Memoryfree  ;



document.getElementById('Processor').innerText= Processor;
document.getElementById('Arch').innerText=Arch;
document.getElementById('Computer').innerText=Computer;


document.getElementById('Memorytotal').innerText=Memorytotal 
document.getElementById('Memoryfree').innerText=Memoryfree
document.getElementById('MemoryUsage').innerText=MemoryUsage 
