import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como o Alvo Conquistado pode me ajudar?",
    answer: "O Alvo Conquistado oferece uma metodologia comprovada para transformar suas metas em realidade, combinando estratégias práticas, suporte personalizado e ferramentas eficientes para maximizar seu potencial."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os resultados variam de pessoa para pessoa, mas nossos alunos geralmente começam a ver progressos significativos em 30-60 dias, seguindo nossa metodologia consistentemente."
  },
  {
    question: "Existe suporte durante o processo?",
    answer: "Sim! Oferecemos suporte completo através de nossa comunidade exclusiva, mentoria personalizada e recursos atualizados regularmente para garantir seu sucesso."
  },
  {
    question: "Posso acessar o conteúdo depois que o curso terminar?",
    answer: "Absolutamente! Você terá acesso vitalício a todo o conteúdo do curso, incluindo atualizações futuras e materiais complementares."
  },
  {
    question: "Como funciona o processo de pagamento?",
    answer: "Oferecemos diversas opções de pagamento seguras, incluindo cartão de crédito, boleto e PIX. Todas as transações são protegidas e garantimos satisfação total com nossa política de reembolso."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.question}
                </span>
                {openItems.includes(index) ? (
                  <Minus className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}