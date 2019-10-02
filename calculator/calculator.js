const btn = document.getElementById('btn');

btn.addEventListener('click', function(e){

    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';

    setTimeout(calculate, 2000);
    e.preventDefault();
});

function calculate(){
    const div = document.getElementById('results');
    const allDivs = document.getElementById('allDivs');
    allDivs.innerHTML = '';
    const years = document.getElementById('years').value;
    const intrestRate = document.getElementById('intrest').value;
    const amount = document.getElementById('amount').value;
    const loading = document.getElementById('loading');

    let intrest = ((amount*intrestRate)/100)*years;
    let totalAmount = parseInt(amount)+intrest;
    const monthlyPayment = totalAmount/(years*12);

    // HTML

    if(isFinite(monthlyPayment)){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        htmlGenerator('Monthly Payment', allDivs, monthlyPayment.toFixed(2));
        htmlGenerator('Total Payment', allDivs, totalAmount.toFixed(2));
        htmlGenerator('Total Intrest', allDivs, intrest.toFixed(2));
    
    }else{
        document.getElementById('loading').style.display = 'none';
        errorMessage("Please chek your inputs");
    }
    
    
}
function errorMessage(error){
    // creating a dive
    const errorDiv = document.createElement('div');
    // adding classes to div
    errorDiv.className = 'alert alert-danger'

    // create a text node and append to a div
    errorDiv.appendChild(document.createTextNode(error))

    // add it before the heading

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    card.insertBefore(errorDiv, heading);

    // clear error message after 3 seconds
    setTimeout(clearError, 3000)

}

function clearError(){
    document.querySelector('.alert').remove();
}

function htmlGenerator(text, dives, value){

    const div2 = document.createElement('div');
    div2.classList = 'input-group mb-3';
    const div3 = document.createElement('div');
    div3.className = 'input-group-prepend';
    const span = document.createElement('span');
    span.className = 'input-group-text'
    span.textContent = text;

    div3.appendChild(span);

    const input = document.createElement('input');
    input.className = 'form-control';
    input.id = 'monthly-payment';
    input.type = 'number';
    input.disabled = true;
    input.value = value;

    div2.appendChild(div3);
    div2.appendChild(input);

    dives.appendChild(div2);


}