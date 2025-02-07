"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nah Ji",
      "Madamji kya aap sure hon?",
      "Socho, abhi bhi chance hain",
      "Mein nahi jaane waala yaha se",
      "Yeh aap seds kar rahi hon mujhe",
      "Haan ji pe click karo warna phool bhijwaunga dher saare",
      "Pweaaaase Cutieji",
      "Iss golden retriever ko kaise nah bol sakti hain aap?",
      "Badi Kathor dil insaan hain aap :(",
      "Aa ha tamatar bada majedar, wah tamatar bada majedar",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTN5NngzcGNuNGN6c3I0ZWZxNTZvcmQ4aWgyaXk4d25rNGllbml2MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ndAvMC5LFPNMCzq7m/giphy.gif" />
          <div className="my-4 text-4xl font-bold">HEHEHEHHEHEHE!!! you get infinite flowers (say hi to nani)!!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media.tenor.com/6xwjsmMIAIoAAAAM/happy-happy-dog.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my valentine madamji :)?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Haan Ji
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Nah Ji" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
