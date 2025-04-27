import { useRef } from 'react';
import Title from '../../components/Title';
import emailjs from '@emailjs/browser';
import * as S from './styled'

import IconMessage from '../../assets/message.svg'

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          'gmailMessage',       
          'template_wg7530n',      
          form.current!,
          '_mbmcpV3G67qQPqzA'         
        )
        .then(() => {
          alert('Mensagem enviada com sucesso!');
          form.current?.reset();
        })
        .catch(() => {
          alert('Erro ao enviar. Tente novamente.');
        });
    };


 return (
   <S.Container id="Contato">
    <Title title='Contato' icon={IconMessage}/>


    <S.AreaContact>
        <S.DivColumn>
          <S.DivForm>
            <S.Form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Seu nome" required />
              <input type="email" name="email" placeholder="Seu e-mail" required />
              <textarea name="message" placeholder="Sua mensagem" required />
              <button type="submit">Enviar</button>
            </S.Form>
          </S.DivForm>
          <S.AreaText>
              <S.Text>
              "Aqueles que podem imaginar qualquer coisa, podem criar o impossível."<br></br> — Alan Turing
              </S.Text>
          </S.AreaText>
        </S.DivColumn>
        <S.Footer>
          <S.TextFooter>
            © 2025 Zirlangio Filho. Todos os direitos reservados.
          </S.TextFooter>
        </S.Footer>
    </S.AreaContact>


   </S.Container>

   
  );
}