import throttle from 'lodash.throttle';
const formState = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const fieldsRef = formRef.querySelectorAll('[name]');

const handleGetState = () =>{
  const state = localStorage.getItem(formState);
  return state ? JSON.parse(state) : {};
}

let state = handleGetState();

const handleOnInput = (e) => {
  const { name, value } = e.target;
  state = { ...state, [name]: value };
  handleSetState(state);
}

const handleOnSubmit = (e)=> {
  e.preventDefault();
  console.log(state);
  clearState();
  formRef.reset();
}


const handleSetState = (state) =>  {
  localStorage.setItem(formState, JSON.stringify(state));
}

const clearState = ()  => {
  localStorage.removeItem(formState);
  state = {};
}

const handleFillFields = () => {
  fieldsRef.forEach(field => {
    field.value = state[field.name] || '';
  });
}

handleFillFields();
formRef.addEventListener('input', throttle(handleOnInput, 500));
formRef.addEventListener('submit', handleOnSubmit);