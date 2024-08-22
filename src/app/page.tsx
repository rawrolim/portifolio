'use client'
import { Fade, Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <div className="col p-5">
      <header>
        <h1>Bem-vindo ao meu portfólio</h1>
      </header>
      <Fade triggerOnce={true}>
        <section >
          <div className="text-center">
            <img src={'Foto2.jpg'} width={200} className="rounded shadow" />
          </div>
          <h2>Sobre Mim</h2>
          <p>
            Olá, meu nome é Rawlinson Rolim. Sou um desenvolvedor web com experiência em NodeJS, ReactJS, SQL, AWS Services, entre outros.
            Tenho trabalhado em vários projetos interessantes, incluindo desenvolvimento frontend e backend.
            Minhas habilidades incluem arquitetura de software, análise de problemas, entre outros, e estou sempre em busca de aprender mais e enfrentar novos desafios.
          </p>
          <div className="mb-3">
            <h3>Contatos</h3>
            <div>Telefone: (22) 99737-5161</div>
            <div>E-mail: alemaorolim@gmail.com</div>
          </div>
        </section>
      </Fade>
      <section >
        <h2>Meus Projetos</h2>
        <ul className="p-0">
          <Slide triggerOnce={true}>
            <li className="border p-3 rounded shadow mb-4" style={{ listStyle: 'none' }}>
              <div className="col-12">
                <h3>Rawlinson Rolim advocacia</h3>
                <p>
                  Site de advocacia desenvolvido para meu pai com intuito de controlar os clientes e processos do escritório. Com a possibilidade de gerar petições iniciais, gerar o documento de hipossuficiência e o contrato do processo.
                </p>
              </div>
              <div className="col-12 mb-2">
                <h4>Tecnologias utilizadas</h4>
                <div className="row ">
                  <ul className="ps-5 col-12 col-md-6 mb-3">
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>NodeJS</li>
                    <li>MySQL</li>
                    <li>JSON Web Token</li>
                    <li>Vercel</li>
                    <li>Axios</li>
                    <li>Bootstrap</li>
                    <li>Docker</li>
                    <li>Nodemailer</li>
                  </ul>
                  <div className="col-12 col-md-6 text-center mb-3">
                    <a target='_blank' href='https://rawlinsonrolimadv.com'>
                      <img src='rawlinsonrolimadv.jpeg' className='rounded w-75 h-auto' />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a target='_blank' className="btn btn-primary me-2" href="https://github.com/rawrolim/rolim-adv">Ver Github</a>
                <a target='_blank' className="btn btn-primary" href='https://rawlinsonrolimadv.com'>Entrar no site</a>
              </div>
            </li>
          </Slide>

          <Slide triggerOnce={true}>
            <li className="border p-3 rounded shadow mb-4" style={{ listStyle: 'none' }}>
              <div className="col-12">
                <h3>Grupo Valor</h3>
                <p>
                  Site de recursos humanos para cadastro de candidatos, empresas e controle de vagas.
                </p>
              </div>
              <div className="col-12 mb-2">
                <h4>Tecnologias utilizadas</h4>
                <div className="row ">
                  <ul className="ps-5 col-12 col-md-6 mb-3">
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>JSON Web Token</li>
                    <li>Vercel</li>
                    <li>Axios</li>
                    <li>Bootstrap</li>
                  </ul>
                  <div className="col-12 col-md-6 text-center mb-3">
                    <a target='_blank' href='https://grupovalor.vercel.app/'>
                      <img src='grupovalor.jpeg' className='rounded w-75 h-auto' />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a target='_blank' className="btn btn-primary me-2" href="https://github.com/rawrolim/next-grupo-valor">Ver Github</a>
                <a target='_blank' className="btn btn-primary" href='https://grupovalor.vercel.app/'>Entrar no site</a>
              </div>
            </li>
          </Slide>

          <Slide triggerOnce={true}>
            <li className="border p-3 rounded shadow mb-4" style={{ listStyle: 'none' }}>
              <div className="col-12">
                <h3>Grupo Valor</h3>
                <p>
                  Site de recursos humanos para cadastro de candidatos, empresas e controle de vagas.
                </p>
              </div>
              <div className="col-12 mb-2">
                <h4>Tecnologias utilizadas</h4>
                <div className="row ">
                  <ul className="ps-5 col-12 col-md-6 mb-3">
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>JSON Web Token</li>
                    <li>Vercel</li>
                    <li>Axios</li>
                    <li>Bootstrap</li>
                    <li>Nodemailer</li>
                    <li>Firebase</li>
                  </ul>
                  <div className="col-12 col-md-6 text-center mb-3">
                    <a target='_blank' href='https://gestao-ativos.vercel.app/'>
                      <img src='gestaoativos.jpeg' className='rounded w-75 h-auto' />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a target='_blank' className="btn btn-primary me-2" href="https://github.com/rawrolim/next-grupo-valor">Ver Github</a>
                <a target='_blank' className="btn btn-primary" href='https://gestao-ativos.vercel.app/'>Entrar no site</a>
              </div>
            </li>
          </Slide>

          <Slide triggerOnce={true}>
            <li className="border p-3 rounded shadow mb-4" style={{ listStyle: 'none' }}>
              <div className="col-12">
                <h3>RawAccess</h3>
                <p>
                  Site para gerenciar usuários de outros sistemas, com a ideia do Cognito da AWS.
                </p>
              </div>
              <div className="col-12 mb-2">
                <h4>Tecnologias utilizadas</h4>
                <div className="row ">
                  <ul className="ps-5 col-12 col-md-6 mb-3">
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>JSON Web Token</li>
                    <li>Vercel</li>
                    <li>Axios</li>
                    <li>Bootstrap</li>
                    <li>Nodemailer</li>
                  </ul>
                  <div className="col-12 col-md-6 text-center mb-3">
                    <a target='_blank' href='https://rawaccess.vercel.app/'>
                      <img src='rawaccess.jpeg' className='rounded w-75 h-auto' />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a target='_blank' className="btn btn-primary me-2" href="https://github.com/rawrolim/gestao-usuarios-frontend">Ver Github</a>
                <a target='_blank' className="btn btn-primary" href='https://rawaccess.vercel.app/'>Entrar no site</a>
              </div>
            </li>
          </Slide>
        </ul>
      </section>
      <section className="col-12 text-center pt-3">
        <label>Sistema desenvolvido por Rawlinson Rolim.</label>
      </section>
    </div >
  );
}
