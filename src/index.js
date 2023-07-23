import './style.css';
import { createNoteObject } from './dom';
import { createNote } from './notes';

const container = document.getElementById('contents-id');

const cancelNoteButton = document.getElementById('cancel-note-form');
cancelNoteButton.addEventListener("click", function(event) {
    const form = document.getElementById('new-task-overlay-id');
    form.classList.add('hide');
    form.classList.remove('flex');
});

document.getElementById('add-note-button').addEventListener("click", function(event) {
    
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const importance = document.getElementById('importance');

    if (title !== "" && date !== "") {
        event.preventDefault();
    }
    else {
        return;
    }

    const note = createNote(title.value, description.value, date.value, importance.value);

    container.appendChild(createNoteObject(note));

    title.value = "";
    description.value = "";
    date.value = "";
    importance.value = 5;
    
    const form = document.getElementById('new-task-overlay-id');
    form.classList.add('hide');
    form.classList.remove('flex');
});

document.getElementById('new-note-btn').addEventListener("click", function() {
    const form = document.getElementById('new-task-overlay-id');
    form.classList.remove('hide');
    form.classList.add('flex');
});