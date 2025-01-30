import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaGithub, FaInstagram } from "react-icons/fa";
import perfil from "./assets/perfil.jpeg";


export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="max-w-2xl w-full bg-gray-900 p-8 rounded-2xl shadow-lg text-center font-sans">
        
        
      <img src={perfil} alt="Foto de Vanley Basso" className="w-32 h-32 mx-auto rounded-full border-4 border-gray-500 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl" />

        
        <h1 className="text-3xl font-bold text-gray-100 mt-4">Vanley Basso</h1>
        
        
        <div className="flex items-center justify-center text-gray-400 mt-2">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <span>Passo Fundo - RS</span>
        </div>

        <p className="text-gray-400 text-lg mt-2 font-poppins mb-10">Front-End | React | AWS Cloud</p>

        <div className="mt-6 text-gray-400 space-y-2">
          <p><strong>⚡ Current Position:</strong> Front-End Intern at Compass UOL</p>
          <p><strong>🎓 Education:</strong> Systems Analysis and Development - IFRS</p>
          <p><strong>💻 Technologies:</strong> JavaScript, React, TypeScript, Tailwind, Node.js, AWS Cloud</p>
        </div>

       
        <h2 className="text-xl font-semibold text-gray-100 mt-8 font-poppins">Connect with me</h2>

        <div className="flex justify-center space-x-4 mt-4">
          <a href="mailto:vanley_basso@hotmail.com" className="text-gray-400 text-2xl hover:text-gray-300">
            <FaEnvelope />
          </a>
          <a href="http://linkedin.com/in/vanleybasso" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/vanleybasso" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/vanleybasso" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
