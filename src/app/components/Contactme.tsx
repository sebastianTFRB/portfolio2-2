import React, { useRef, useState, FormEvent } from "react";
import { useTranslation } from 'react-i18next';
import emailjs from "emailjs-com";
import styled from "styled-components";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  color: black;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  color: black;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contactme: React.FC = () => {
  const {t} = useTranslation();
  const ref = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (ref.current) {
      emailjs
        .sendForm(
          "service_uiqjqfe",
          "template_oy9uich",
          ref.current,
          "ozhP12nI5PIb3Iuox"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
          },
          (error) => {
            console.log(error.text);
            setSuccess(false);
          }
        );
    }
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title >
            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-300 bg-clip-text text-4xl font-bold  p-2 inline tracking-tight text-transparent">
            {t ('contact')}
            </span>
            
            </Title>
            <Input placeholder= {t ('Cname')} name="name" />
            <Input placeholder={t ('Cemail')} name="email" />
            <TextArea placeholder={t ('Cmessage')} name="message" rows={10} />
            <Button type="submit">{t ('Csend')}</Button>
            {success && "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
        </Right>
      </Container>
    </Section>
  );
};

export default Contactme;