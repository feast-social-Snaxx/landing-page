export default function TextInput({ id, name, onValueChange, placeholder, maxLength, eltRef, required = false, error, type = "text", light = false }) {
    return (
        <div className="text-input-container">
            {
                required ?
                    <span className="input-required gradient txt-2">*</span>
                    :
                    <></>
            }
            <input
                ref={eltRef}
                className={`txt-2 text-input text-input-${light ? "light" : "dark"}${error ? " input-error" : ""}`}
                type={type}
                maxLength={maxLength}
                id={id}
                name={name}
                placeholder={placeholder}
                onBlur={onValueChange ? (val) => onValueChange(val.target.value) : () => { }}
            />
            {
                error ?
                    <p className="text-input-error txt-1">
                        {error}
                    </p>
                    :
                    <></>
            }
        </div>
    );

};
