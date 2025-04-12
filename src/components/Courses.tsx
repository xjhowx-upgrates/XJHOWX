import React from 'react';
import { BookOpen, Code, PenTool, Briefcase } from 'lucide-react';

const courses = [
  {
    title: 'Desenvolvimento Pessoal',
    description: 'Aprenda técnicas comprovadas para alcançar seu potencial máximo',
    icon: BookOpen,
    color: 'text-blue-500'
  },
  {
    title: 'Produtividade',
    description: 'Maximize seu tempo e resultados com métodos eficientes',
    icon: PenTool,
    color: 'text-green-500'
  },
  {
    title: 'Tecnologia',
    description: 'Domine as ferramentas digitais essenciais para o sucesso',
    icon: Code,
    color: 'text-purple-500'
  },
  {
    title: 'Carreira',
    description: 'Estratégias para impulsionar seu crescimento profissional',
    icon: Briefcase,
    color: 'text-orange-500'
  }
];

const Courses = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos Cursos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Escolha o caminho perfeito para sua jornada de desenvolvimento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 transition-transform hover:scale-105"
            >
              <div className={`${course.color} mb-6`}>
                <course.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {course.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {course.description}
              </p>
              <button className="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                Saiba mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;