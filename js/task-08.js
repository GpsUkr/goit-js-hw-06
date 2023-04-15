const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const formElements = e.target.elements;

    const formValues = {};

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];

        if (element.type !== 'submit') {
            if (element.value.trim() === '') {
                alert('All fields must be filled out');
                return;
            }

            formValues[element.name] = element.value;
        }
    }

    console.log(formValues);

    loginForm.reset();
});
