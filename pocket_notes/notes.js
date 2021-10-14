let notes = [];

const generateNotes = () => {
  const localStorage = window.localStorage;

  const display = document.getElementById('display');
  const notebook = document.createElement('div');
  notebook.id = 'notebook';
  notebook.style.border = `5px solid ${appList[0].color}`;
  display.append(notebook);

    const formatNote = (note) => {
      const formattedNote = document.createElement('div');
      formattedNote.id = note.id;
      formattedNote.innerHTML = note.text;
      formattedNote.classList = 'note';
      return formattedNote;
    };

  const renderNotes = () => {
    const saved = localStorage.getItem('notes');
    if (saved) {
      const savedNotes = JSON.parse(saved);
      savedNotes.forEach(note => {
        const formattedNote = formatNote(note);
        notebook.append(formattedNote);
      });

    }
  };

  const addNote = (text) => {
    const note = {
      text,
      id: Date.now(),
    }

    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    const formattedNote = formatNote(note);
    notebook.append(formattedNote);
  }

  const options = document.getElementById('options');
  const form = document.createElement('form');
  form.id = 'form';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // trim whitespace from input
    const text = input.value.trim();
    input.value = '';
    addNote(text);
  });

  options.append(form);

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Enter your note...'
  input.id = 'notes-input';
  form.append(input);

  const button = document.createElement('button');
  button.innerHTML = 'Submit';
  button.type = 'submit';
  button.style.color = appList[0].color;
  button.id = 'submit-button';
  form.append(button);

  renderNotes();
};
