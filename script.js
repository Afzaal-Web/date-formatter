const currentDateParagraph = document.getElementById('current-date');
const dateOptionsSelectElement = document.getElementById('date-options');




// const exampleSentence = "laazfa".split("").reverse().join();
// console.log(exampleSentence);

dateOptionsSelectElement.addEventListener('change', () => {
    const date = new Date();
    const day =  date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    
    const formattedDate = `${day}-${month}-${year}`;

switch(dateOptionsSelectElement.value){
    case 'yyyy-mm-dd':
        
    currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");  
    break;

    case 'mm-dd-yyyy-h-mm':
    const formattedHours = hours % 12 || 12;
    const timePeriod = hours >= 12 ? 'PM' : 'AM';
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const paddedseconds = seconds < 10 ? `0${seconds}` : seconds;
    currentDateParagraph.textContent = `${month}-${day}-${year} ${formattedHours}:${paddedMinutes} ${paddedseconds} ${timePeriod}`;
    confetti({});
    break;
    
    default:
        currentDateParagraph.textContent = formattedDate;
}
});



