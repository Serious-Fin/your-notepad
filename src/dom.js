export function createNoteObject(noteObj) {
    const baseElement = document.createElement('div');
    baseElement.classList.add('main-note');

    const upper = document.createElement('div');
    upper.classList.add('upper-note');
    upper.classList.add('active');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    const title = document.createElement('div');
    title.innerHTML = noteObj.title;
    title.classList.add('bolded');

    const lowerNode = document.createElement('div');
    lowerNode.classList.add('lower-note');
    lowerNode.classList.add('hide');

    const description = document.createElement('div');
    description.innerHTML = noteObj.description;

    const attributes = document.createElement('div');
    attributes.classList.add('note-attributes');

    const dateDiv = document.createElement('div');

    const priorityDiv = document.createElement('div');

    const date = document.createElement('div');
    date.innerHTML = 'Due Date:';
    date.classList.add('bolded');

    const dateVal = document.createElement('div');
    dateVal.innerHTML = noteObj.date;

    const priority = document.createElement('div');
    priority.innerHTML = 'Priority:';
    priority.classList.add('bolded');

    const priorityVal = document.createElement('div');
    priorityVal.innerHTML = noteObj.priority;

    dateDiv.appendChild(date);
    dateDiv.appendChild(dateVal);

    priorityDiv.appendChild(priority);
    priorityDiv.appendChild(priorityVal);

    attributes.appendChild(dateDiv);
    attributes.appendChild(priorityDiv);

    lowerNode.appendChild(description);
    lowerNode.append(attributes);

    title.addEventListener("click", function() {
        if (lowerNode.classList.contains('hide')) {
            // Unhide note
            lowerNode.classList.remove('hide');
            baseElement.classList.add('active');
            upper.classList.remove('active');
        }
        else {
            // Hide note
            lowerNode.classList.add('hide');
            baseElement.classList.remove('active');
            upper.classList.add('active');
        }
    });

    upper.appendChild(checkbox);
    upper.appendChild(title);

    baseElement.appendChild(upper);
    baseElement.appendChild(lowerNode);


    return baseElement;
}