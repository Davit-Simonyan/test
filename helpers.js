export const getElement = () => {

};

export const tagSetValue = (selectorName, value) => {
    document.querySelector(selectorName).innerHTML = value;
};

export const addEvent = (eventType, selectorName, callBack) => {
    document.querySelector(selectorName).addEventListener(eventType, callBack)//?
}

export const isShowElement = (selectorName, displayType) => {
    document.querySelector(selectorName).style.display = displayType;
}

export const optionGenerator = (options) => {
    let buttonsList = '';
    options.forEach((item, index) => {
        buttonsList+= `<button class="button" data-index="${index + 1}" id="button${index + 1}">${item}</button>`;
    });
    return buttonsList;
};

export const appendChild = (selectorName, tag, id) => {

    const section = document.querySelector(selectorName)
    let p = document.createElement(tag)
    p.classList.add('quiz_result_info')
    p.id = id;
    section.appendChild(p)
    return p;
};


