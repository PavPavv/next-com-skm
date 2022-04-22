import React from "react";

import { members } from "../../data/members";
//  ui
import Member from "./Member";

const AboutUs = (): JSX.Element => {
  return (
    <section 
      className="flex flex-col bg-white py-20 text-3xl md:text-4xl z-10"
    >
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>
            Мы сделаем ваш дом теплее и надежнее, а инфраструктуру удобнее и эффективнее.
          </strong>
          {' '}
          Наши специалисты снабдят Вас качественной экспертизой и поддержкой.  
        </p>
      </div>

      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Наши специалисты</h2>
        <div className="mt-2">Направление 1</div>
        <div className="mt-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
            {members.map(m => (
              <Member 
                id={m.id} 
                socialId={m.socialId} 
                name={m.name} 
                link={m.link} 
                key={m.id}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
