const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');


let timer = 0;

// const exampleSentence = "laazfa".split("").reverse().join();
// console.log(exampleSentence);

dateOptionsSelectElement.addEventListener('change', () => {
    clearInterval(timer);

    const date = new Date();
    const day =  date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    const formattedDate = `${day}-${month}-${year}`;

switch(dateOptionsSelectElement.value){
    case 'yyyy-mm-dd':
        
    currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");  
    break;

    case 'mm-dd-yyyy-h-mm':
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
    const timePeriod = hours >= 12 ? 'PM' : 'AM';
    currentDateParagraph.textContent = `${month}-${day}-${year} ${formattedHours}:${minutes} ${seconds} ${timePeriod}`;
    confetti({});
    timer = setInterval(() => {
        const liveDate = new Date();
        const liveHours = (liveDate.getHours() % 12 || 12).toString().padStart(2, '0');
        const liveMinutes = liveDate.getMinutes().toString().padStart(2, '0');
        const liveSeconds = liveDate.getSeconds().toString().padStart(2, '0');
        const timePeriod = liveDate.getHours() >= 12 ? 'PM' : 'AM';
        currentDateParagraph.textContent = `${month}-${day}-${year} ${liveHours}:${liveMinutes}:${liveSeconds} ${timePeriod}`;
      }, 1000);
    break;
    
    default:
        currentDateParagraph.textContent = formattedDate;
}



});




