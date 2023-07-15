async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const refreshButton = document.querySelector('#refresh-button');

    const response = await fetch('http://localhost:9001/counter');

    const result = await response.json();

    let countValue = result.value;

    function increment(){
        countValue++;
        countContainer.textContent = countValue;
        // console.log(countValue);
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
        // console.log(countValue);
    }

    function refresh(){
        const countValue = result.value;
        countContainer.textContent =countValue;
        // console.log('Counter has been reset to ' + countValue + '.')
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    refreshButton.addEventListener('click', refresh);
    countContainer.textContent = countValue;
}
main()