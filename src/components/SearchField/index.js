import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';


const SearchField = ({placeholder, inputChangeCallback}) => {
    const [input, setInput] = useState('')

    const debouncedCallback = useCallback(
		debounce(nextValue => inputChangeCallback(nextValue), 500),
		[]
	);

    const handleInputCange = (e) => {
        const text = e.target.value
        setInput(text)
        if(text.length) {
            debouncedCallback(text.trim())
        }        
    }
    return(
        <div>
            <input placeholder={placeholder} value={input} onChange={handleInputCange} />
        </div>
    )
}

export default SearchField