import React from 'react';
import { useState } from 'react';

export default function Forms(props) {
    const [text, setText] = useState("Enter some text..");

    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    
    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Convert to upper case");
    }
    
    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Convert to lower case");
    }

    const handleCapitalize = () => {
        let textArray = text.split(".");
        let capitalizedArray = textArray.map(sentance => {
            return sentance.charAt(0).toUpperCase() + sentance.slice(1);
        });
        setText(capitalizedArray.join("."));
        setText(capitalizedArray.join("."));
        props.showAlert("Convert to capitalize");
    }


    const handleRemoveSpaces = () => {
        setText(text.replace(/\s+/g, ' '));
        props.showAlert("Remove spaces");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard");
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Cleared");
    }

    return (
        <div className={`h-full ${props.darkMode}`}>
            <div className="max-w-2xl mx-auto">
                <h4 className="text-2xl font-semibold text-center mb-4 pt-12">Text Utility</h4>
                <p className="flex justify-between">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Enable dark
                        <input
                            type="checkbox" onClick={props.setDarkMode}
                            className="ml-2 cursor-pointer appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5 before:mt-[1.5px]"
                        />
                    </label>
                </p>
                <textarea onChange={handleOnChange} id="message" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={text}></textarea>
                <div className="flex mt-4">
                    <button type="button" onClick={handleUpperCase} className="border border-gray-700 bg-gray-700 text-xs text-white rounded-md px-4 py-2 ml-0 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline" >
                        Upper Case
                    </button>
                    <button type="button" onClick={handleLowerCase} className="border border-gray-700 bg-gray-700 text-xs text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline" >
                        Lower Case
                    </button>
                    <button type="button" onClick={handleCapitalize} className="border border-gray-700 bg-gray-700 text-xs text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline" >
                        capitalize
                    </button>
                    <button type="button" onClick={handleRemoveSpaces} className="border border-gray-700 bg-gray-700 text-xs text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline" >
                        Remove extra spaces
                    </button>
                    <button type="button" onClick={handleCopy} className="border border-gray-700 bg-gray-700 text-xs text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline" >
                        Copy to Clipboard
                    </button>
                    <button type="button" onClick={handleClear} className="border border-gray-700 bg-gray-700 text-xs text-white rounded-md px-4 py-2 mr-0 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline" >
                        Clear
                    </button>
                </div>

                <div className="mt-3 pl-0 px-2 text-sm font-semibold">
                    <p>{text.length > 0 ? text.split(/\s+/).length : 0} words {text.length} charecters</p>
                    <p>{((text.length > 0 ? text.split(" ").length*0.8 : 0) / 60).toFixed(2)} minute to read</p>
                </div>
            </div>
        </div>
    )
}
