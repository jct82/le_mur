const Input = ( {type} ) => {
  const focusOut = (e) => {
    const inputClass = e.target.parentNode;
    if (e.target.value.trim() != '') {
      if (!inputClass.classList.contains('on')) inputClass.classList.add('on');
    } else {
      inputClass.classList.remove('on');
    }
  }
  return (
    <div className="input-wrapper">
      <input type={type} onBlur={focusOut}/>
      <label>Nom</label>
      <div className="line"></div>
    </div>
  )
};
export default Input;
