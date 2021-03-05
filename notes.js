const addBtn = document.querySelector('.add');
const editBtn = myNote.querySelector('.edit');
const delBtn = myNote.querySelector('.delete');
const main = myNote.querySelector('.main');
const textArea = myNote.querySelector('.text-area');

editBtn.addEventListener('click', editEvent);
function editEvent(){
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
}
editEvent();

textArea.addEventListener('input', inputText);
function inputText(e){
    const { value } = e.target;
    main.innerHTML = marked(value);
}
inputText();

addBtn.addEventListener('click', addNotes);



function addNotes(){
    const myNote = document.createElement('div');
    myNote.classList.add('myNote');
            myNote.innerHTML =  <div class="myNote">
            <div class="tools">
                <p style="color: #fff;">My Notes</p>
            <button class="edit">  <i class="fas fa-edit"></i></button>
            <button class="delete">  <i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main hidden"></div>
            <textarea class="text-area"> </textarea>
        </div>
    

            editBtn.addEventListener('click', editEvent);
        function editEvent(){
            main.classList.toggle('hidden');
            textArea.classList.toggle('hidden');
        }
        editEvent();

        textArea.addEventListener('input', inputText);
        function inputText(e){
            const { value } = e.target;
            main.innerHTML = marked(value);
        }
        inputText();

        addBtn.addEventListener('click', addNotes);

        addNotes();

        document.body.appendChild('myNote');

}
addNotes();