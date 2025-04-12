import { GraduationCap, BookOpen, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 sm:pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Transforme Seus Objetivos em{' '}
            <span className="text-blue-600 dark:text-blue-400">Conquistas Reais</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up">
            Aprenda com os melhores especialistas e desenvolva as habilidades necessárias
            para alcançar seus objetivos profissionais.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Começar Agora
            </button>
            <button className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Explorar Cursos
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
          <div className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Cursos</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">10k+</div>
              <div className="text-gray-600 dark:text-gray-300">Alunos</div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">95%</div>
              <div className="text-gray-600 dark:text-gray-300">Satisfação</div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;