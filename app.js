document.getElementById('story-form').addEventListener('submit',getStory);

function getStory(e)
{
    console.log('Generating...');
    // setTimeout()
    const customName = document.getElementById('custom-name');

    if(document.getElementById('Radio1').checked) {

        const p = document.getElementById('para1');

        if(customName.value !== '')
        {
            var val = p.innerText.replace('Bob',customName.value);
            p.innerText = val;
        }

        document.getElementById('para1').style.display = 'block';
        document.getElementById('para2').style.display = 'none';
        document.getElementById('story-text').style.display = 'block';
      }else if(document.getElementById('Radio2').checked) {

        const p = document.getElementById('para2');

        if(customName.value !== '')
        {
            var val = p.innerText.replace('Bob',customName.value);
            p.innerText = val;
        }

        document.getElementById('para1').style.display = 'none';
        document.getElementById('para2').style.display = 'block';
        document.getElementById('story-text').style.display = 'block';
      }
      else{
          showError("Please select any country !");
      }
    
    e.preventDefault();
}

function showError(error)
{
    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    errorDiv.className = 'alert alert-danger text-center';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv,heading);

    setTimeout(clearError,1500);
}

function clearError(){
    document.querySelector('.alert').remove();
}