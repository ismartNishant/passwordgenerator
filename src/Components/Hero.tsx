import React, { useState, useCallback, useEffect, useRef } from "react";

const Main: React.FC = () => {
    const [length, setLength] = useState<number>(8);
    const [numberAllowed, setNumberAllowed] = useState<boolean>(false);
    const [charAllowed, setCharAllowed] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [display, setDispaly] = useState<string>("hidden");



    const PasswordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

        for (let i = 1; i < length; i++) {
            const char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, charAllowed, numberAllowed]);

    useEffect(() => {
        PasswordGenerator();
    }, [length, charAllowed, numberAllowed, PasswordGenerator]);

    const passwordRef = useRef<HTMLInputElement>(null);

    const copyContentToClipBoard = useCallback(() => {
        setDispaly("block")
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
        setTimeout(() => {
          setDispaly("hidden")
        }, 3000)
    }, [password]);

    return (
        <div className="relative mx-auto mt-24  md:px-8 px-4">
            <div className="w-full max-w-2xl mx-auto shadow-md bg-gray-200 mt-5 p-4 ">
                <h1 className="text-4xl md:text-5xl text-center mb-4">Password Generator</h1>
                <div className="">
                    <div className="mx-auto flex items-center max-w-md   shadow-md">
                        <input
                            readOnly
                            type="text"
                            value={password}
                            ref={passwordRef}
                            placeholder="Password..."
                            className=" w-full   rounded-md  p-2 md:p-3 outline-indigo-500 border-indigo-400 "
                        />
                        <button onClick={copyContentToClipBoard}
                            className="shadow bg-indigo-400 p-3 font-semibold rounded-e-md  hover:bg-indigo-900 hover:text-white"
                        >
                            Copy
                        </button>
                    </div>
                    <div className={`${display} text-center text-indigo-400` }>
                        <h1>Password is copied to clipboard !</h1>
                    </div>
                </div>
                <div className="flex items-center mt-6 justify-evenly flex-wrap">
                    <div>
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            onChange={(e) => {
                                setLength(parseInt(e.target.value, 10));
                            }}
                            className="cursor-pointer"
                        />
                        <label className="text-indigo-700 font-bold ms-3">Length: {length}</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={() => {
                                setNumberAllowed((prev) => !prev);
                            }}
                            className="cursor-pointer"
                        />
                        <label htmlFor="numberInput" className="text-indigo-700 font-bold ms-1">
                            Numbers
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            id="charInput"
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }}
                            className="cursor-pointer"
                        />
                        <label htmlFor="charInput" className="text-indigo-700 font-bold ms-1">
                            Characters
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
