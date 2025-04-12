import React from 'react';
import { Target, Rocket, Users, Award, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Aprendizado Personalizado',
    description: 'Trilhas de estudo adaptadas ao seu ritmo e objetivos específicos'
  },
  {
    icon: Rocket,
    title: 'Conteúdo Atualizado',
    description: 'Material didático sempre em dia com as últimas tendências do mercado'
  },
  {
    icon: Users,
    title: 'Comunidade Ativa',
    description: 'Interaja com outros alunos e aprenda através de experiências compartilhadas'
  },
  {
    icon: Award,
    title: 'Certificação Reconhecida',
    description: 'Receba certificados válidos e reconhecidos pelo mercado'
  },
  {
    icon: Clock,
    title: 'Flexibilidade Total',
    description: 'Estude no seu próprio tempo, com acesso 24/7 ao conteúdo'
  },
  {
    icon: Shield,
    title: 'Suporte Garantido',
    description: 'Assistência técnica e pedagógica sempre que precisar'
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Por que escolher nossa plataforma?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Oferecemos uma experiência de aprendizado única, combinando tecnologia
            de ponta com métodos comprovados de ensino
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;