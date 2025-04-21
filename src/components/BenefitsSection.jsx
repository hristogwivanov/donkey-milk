import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Хранителна стойност',
      description: 'Богато на есенциални витамини, минерали и имуностимулиращи свойства със състав, забележително подобен на майчината кърма.',
      icon: '🥛'
    },
    {
      title: 'Хипоалергенно',
      description: 'Естествено ниско съдържание на алергени, което го прави подходящо за хора с чувствителност и алергии към кравето мляко.',
      icon: '✅'
    },
    {
      title: 'Здраве на кожата',
      description: 'Съдържа съединения, които подпомагат регенерацията на кожата и могат да помогнат при състояния като екзема и псориазис.',
      icon: '💆'
    },
    {
      title: 'Имунна подкрепа',
      description: 'Съдържа лизозим и лактоферин, които имат антимикробни и имуностимулиращи свойства.',
      icon: '💪'
    },
    {
      title: 'Храносмилателно здраве',
      description: 'Лесно смилаемо с пребиотични свойства, които подпомагат здравето на червата и баланса на микробиома.',
      icon: '🍽️'
    },
    {
      title: 'Устойчиво производство',
      description: 'Нашето магарешко мляко се добива етично, следвайки устойчиви земеделски практики, които зачитат благосъстоянието на животните.',
      icon: '🌱'
    }
  ];

  return (
    <div className="benefits-content-wrapper">
      <h2>Ползи от магарешкото мляко</h2>
      <p className="benefits-intro">
        Открийте защо магарешкото мляко се цени от хиляди години заради своите изключителни здравословни свойства:
      </p>
      
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
