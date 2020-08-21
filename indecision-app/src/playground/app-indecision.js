//create app object title/subtitle
const appObject = {
    title: 'Indecision app',
    subtitle: 'Allow the computer to make decisions for you',
    options: []
}

//when form is submitted change the options array
const onFormSubmit = (e) => {
    e.preventDefault(); //prevent changing page in URL

    const option = e.target.elements.option.value;
    if (option) { //if content is inside there
        appObject.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

//create makeDecison button function
const makeDecision = () => {
    const randomNum = Math.floor((Math.random() * appObject.options.length))
    const option = appObject.options[randomNum];
    alert(option);  
};

//create removeall button above list so array.length becomes 0
const removeAll = () => {
    appObject.options = [];
    renderApp() //must render it or else it won't work
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    //JSX - Javascript XML 
    const template = (
        <div>
            <h2>{appObject.title}</h2>
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{appObject.options.length}</p>
            <button disabled={appObject.options.length === 0} onClick={makeDecision}>What should you do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    appObject.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderApp();
