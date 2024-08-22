/**esse é o código da seção 26 e vai ensinar
 * imagens animadas, o projeto já veio iniciado
 * e é uma página para inserir tarefas, mas o importante
 * é as bibliotecas q serão ensinadas
 * Na aula 489 é explicado como aplicar uma animação, inicialmente, só
 * com CSS, no exeplo é mostrada uma seta para cima que vai para baixo quando
 * é expandido e mostrado os detalhes do item
 * No componente ChallengeItem.jsx há uma controlador do isExpanded que se for
 * true, aplica a classe que rotaciona a seta
 */
<div className={`challenge-item-details ${isExpanded ? 'expanded':''}`}>
          <p>
            <button onClick={onViewDetails}>
              View Details{' '}
              <span className="challenge-item-details-icon">&#9650;</span>
            </button>
          </p>
</div>
/**Já no index.css ficam assim as duas classes, a novidade aqui é o transition
 * que faz uma transição entre uma imagem e outra
 */
.challenge-item-details-icon {
    display: inline-block;
    font-size: 0.85rem;
    margin-left: 0.25rem;
    transition: transform 0.03s ease-out;
  }

  .challenge-item-details.expanded .challenge-item-details-icon {
    transform: rotate(180deg);
  }

  /**Na aula 490 é incluído um código para animar um modal que quando
   * aberto irá deslizar para cima e fazer um fade in, não é possível
   * aplicar a técnica acima pois o modal não está o tempo todo no DOM,
   * mas é usada outra técnica com o @ abaixo, colocando o nome que quiser
   * e criando um tipo de transição customizada,  depois usada na classename acima
   */
  .modal {
    top: 10%;
    border-radius: 6px;
    padding: 1.5rem;
    width: 30rem;
    max-width: 90%;
    z-index: 10;
    animation: slide-up-fade-in 0.3s ease-out forwards;
  }
  
  @keyframes slide-up-fade-in {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

/**Aula 491, para instalar a biblioteca: npm install framer-motion*/

/**Aula 492 usou um código no CodeSandbox para mostrar
 * o conceito básico da biblioteca, tinham 3 inputs na tela
 * e um quadrado do lado, conforme os valores
 * de x, y e rotate eram mudados o quadrado mexia certa distância
 * e de certo modo. O motion passa a controlar a div onde está
 * o quadrado e o relaciona com os estados correspondentes de cada variável
  */

import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <><><div id="demo">
          <motion.div
              id="box"
              animate={{ x: x, y: y, rotate: rotate }}
              transition={{
                  duration: 0.3,
                  bounce: 1,
                  type: "spring",
              }} />
      </div>
//Aula 493 o mesmo código acima que rotaciona a seta fica assim com o motion frame

          import {motion} from 'framer-motion';

          <>
              <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  className="challenge-item-details-icon">&#9650;</motion.span>
          </>

/**Já a aula 494 atualiza o Modal.jsx para que
          * ele apareça de forma suave e deslizando para cima, aqui
          * usou o initial para um estados inicial
          * pois ele não está no DOM inicialmente,
          A aula 495 acrescenta o exit, que é o controle de saída,
          mas nesse caso é preciso fazer um wrap no componente para
          que o React aplique o efeito ao invés de só fechar */

          <motion.dialog
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 2, y: 30 }}
              open className="modal">
          </motion.dialog>;

          //No componente Header foi envolvido para aplicar o exit
          <AnimatePresence>
              {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
          </AnimatePresence>

//Na aula 496 é animado um botão que está no Header.jsx e que se destaca quando o
// mouse passa por cima, aumenta o tamanho e dá uma sensação de bounce (pulo)</><motion.button

<motion.button
whileHover={{scale: 1.1}}
transition={{type: 'spring', stiffness: 500}}
onClick={handleStartAddNewChallenge} className="button">
  Add Challenge
</motion.button>
/*Na aula 497 os argumentos sõ passados para uma função variant que pode
ser reaproveitada, ao invés de digitada diretamente nas variáveis*/

<motion.dialog
      variants={{
        hidden: { opacity: 0, y: 30},
        visible: {opacity: 1, y: 30}
      }}
      initial='hidden'
      animate='visible'
      exit='hidden'
      open
      className="modal">
</motion.dialog>
/*aula 499 explica que variants podem ser passados para componentes filhos 
como esse que está no NewChallenge, acho q o initial e o animate são passados
automaticamente nesse caso. Tive q comentar o exit acima pois começou a travar o código
Já na aula 499 foi incluído esse staggerChildren (stagger = cambalear) que mostra aos poucos as imagens,
aqui ele foi aplicado na ul e, portanto, os ícones vão aparecendo aos poucos na tela
Também é possível estabelecer uma progressão nos tamanhos como foi feito no visible dentro das []
*/
<motion.ul id="new-challenge-images" variants={{
          visible: {transition: {staggerChildren: 0.05}}
        }}>
          {images.map((image) => (
          <motion.li
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: [0.8, 1.3, 1]},
            }}
              exit={{ opacity: 1, scale: 1}}
              transition={{type:'spring'}}
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? 'selected' : undefined}
            >
              <img {...image} />
          </motion.li>
          ))}
        </motion.ul>

/*Aula 501 explica como fazer uma animação de forma declarativa ao invés de 
imperativa, aqui vai balançar os inputs caso o usuário tente submeter o formulário
sem preencher os campos, por isso o animate foi colocado na parte de verificação do 
código que não copiei aqui.
Primeiro tem que copiar o useAnimate, criar uma variável com dois campos
o scope, um tipo de ref que deve ser passado para onde estiver a parte do elemento
que vai receber o animate, o x q é como ele vai se mexer e as configurações a mais
que quiser*/

import { motion, useAnimate, stagger } from 'framer-motion';
const [scope, animate ] = useAnimate();
animate('input, textarea', {x: [-10, 0, 10, 0]},
    {type: 'spring', duration: 0.2, delay: stagger(0.05) });
</>

/**Já o scope fica um pouco mais abaixo  */

return (
    <Modal title="New Challenge" onClose={onDone}>
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}></form>

</Modal>)
/**Aula 502 explica q se simplesmente colocar a palavra layout em um componente
 * ele vai tentar animar os itens, aqui, por exemplo, se houver mais de um item
 * na lista de challenges e um for excluído o de baixo faz o slide para cima
 */
<motion.li layout>
</motion.li>
/**Aula 503 utiliza a tag AnimatePresence
 * A tag <AnimatePresence> é uma parte da biblioteca Framer Motion, que facilita
 *  a criação de animações interativas em aplicações web. Ela permite que os 
 * elementos circundantes se movam para suas novas posições imediatamente. 
 * Quando um elemento filho é removido da árvore React, o <AnimatePresence>
 *  detecta isso e executa animações de saída em componentes de movimento 
 * contidos no filho removido antes de remover toda a árvore do DOM1. 
 * É uma ferramenta poderosa para criar transições suaves e dinâmicas em páginas web!
 * Aula 504, 505 e 506 basicamente fazem o que já foi feito mas em outras partes do código,
 * a única diferença é a animação da barrinha que fica embaixo do item q está selecionado,
 * também é usado key para recriar um elemento, colocando na key algum elemento q vá ser modificado
 * forçando assim a renderização
 * Já a aula 507 ensina a animar de acordo com o rolamente da página, no exemplo
 * ele foi mudando a imagem, a deixando mais escura conforme a tela descia,
 * assim como criou um efeito parallex movendo as imagens em diferentes velocidades e
 * aumentou o tamanho do texto
 * Aqui uma parte do código, só para exemplificar
*/

import { motion, useScroll, useTransform } from 'framer-motion';
//aqui ele relaciona a posição da tela com a posição da imagem e depois com o nível de opacidade
export default function WelcomePage() {
    const { scrollY } = useScroll();
    const yCity = useTransform(scrollY, [0, 200], [0, -100]);
    const opacityCity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);

    <motion.img
          style={{ opacity: opacityCity, y: yCity}}
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
        />
