import React from 'react';

// Font styles for consistent application
const fontStyles = {
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
};

const serifStyles = {
  fontFamily: 'Georgia, Cambria, Times New Roman, Times, serif'
};

const monoStyles = {
  fontFamily: 'Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
};

// This component is just for testing Tailwind CSS classes
const TailwindTest = () => {
  return (
    <div className="p-4 bg-blue-500" style={fontStyles}>
      <h1 className="text-2xl text-white mb-4">Tailwind Test (v4.1.4)</h1>
      <p className="text-white">Testing basic Tailwind classes</p>
      
      {/* Font classes */}
      <div className="mt-4 bg-white p-4 rounded">
        <h2 className="font-bold text-xl mb-2">Font Weight Classes</h2>
        <p style={{fontWeight: 100}}>This is font-thin (100)</p>
        <p style={{fontWeight: 200}}>This is font-extralight (200)</p>
        <p style={{fontWeight: 300}}>This is font-light (300)</p>
        <p style={{fontWeight: 400}}>This is font-normal (400)</p>
        <p style={{fontWeight: 500}}>This is font-medium (500)</p>
        <p style={{fontWeight: 600}}>This is font-semibold (600)</p>
        <p style={{fontWeight: 700}}>This is font-bold (700)</p>
        <p style={{fontWeight: 800}}>This is font-extrabold (800)</p>
        <p style={{fontWeight: 900}}>This is font-black (900)</p>
      </div>
      
      {/* Font families */}
      <div className="mt-4 bg-white p-4 rounded">
        <h2 className="font-bold text-xl mb-2">Font Family Examples</h2>
        <p style={fontStyles}>This is Sans font (using inline styles)</p>
        <p style={serifStyles}>This is Serif font (using inline styles)</p>
        <p style={monoStyles}>This is Mono font (using inline styles)</p>
      </div>
      
      {/* Text utilities */}
      <div className="mt-4 bg-white p-4 rounded">
        <h2 className="font-bold text-xl mb-2">Text Style Classes</h2>
        <p className="italic">This is italic</p>
        <p className="underline">This is underlined</p>
        <p className="line-through">This is strikethrough</p>
        <p className="uppercase">This is uppercase</p>
        <p className="lowercase">THIS IS LOWERCASE</p>
        <p className="capitalize">this is capitalized</p>
      </div>
    </div>
  );
};

export default TailwindTest;
