export function Radio({ pergunta, options, onChange, value, id, active }) {

  if (active === false) return null;
  
  return (
    <>
      <fieldset>
        <legend>{pergunta}</legend>
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              id={id}
              checked={value === option}
              value={option}
              onChange={onChange}
            />
            {option}
          </label>
        ))}
      </fieldset>
    </>
  );
}
