import './App2.css';
import sandora_logo from './assets/logo sandora 7.png'

function App2() {
    return (
        <div className="container">
          <div className='container-esquerdo'>
            <div className="wrap-logo">
              <img src={sandora_logo} alt="Logo da Sandora" className='logo'/>
            </div>
            <div className='wrap-text'>
  
              <h1 className='title-left'>Crie sua conta e comece a aprender</h1>
              <p className='phrase-left'>Crie sua conta em poucos segundos e comece sua jornada de aprendizado.</p>
              
            </div>
          </div>
  
          <div className='container-direito'>
            <div className='wrap-login'>
              <form className="login-form">
                <span className="login-form-title">Cadastro</span>

                <div className="wrap-input">
                  <label htmlFor='email'>Nome Completo</label>
                  <input type="name" id="name" name="name" placeholder="Como você se identifica na plataforma."/>
                </div>

                <div className="wrap-input">
                  <label htmlFor='email'>Empresa</label>
                  <input type="enterprise" id="enterprise" name="enterprise" placeholder="Insira o nome da empresa."/>
                </div>
  
                <div className="wrap-input">
                  {/*<p className='email-text'>Email</p>
                  <input className='input' type='email'/>
                  <span className="focus-input" data-placeholder="Email"></span>-*/}
                  <label htmlFor='email'>Email</label>
                  <input type="email" id="email" name="email" placeholder="Insira seu email cadastrado"/>
                </div>
  
                <div className="wrap-input">
                  {/*<p className='senha-text'>Senha</p>
                  <input className='input' type='password'/>
                  <span className="focus-input" data-placeholder="Insira sua senha"></span>*/}
                  <label htmlFor="password">Senha</label>
                  <input type="password" id="password" name="password" placeholder="Insira sua senha"/>
                  <i className="bi bi-eye-slash"></i>
                </div>
  
                <div className="text-forgot">
                  <a href="#" className="forgot-password">Esqueci minha senha</a>
                </div>
  
                <div className="login-button-externo">
                  <button className="login-button-interno">CRIAR CONTA</button>
                </div>
  
                <div className="text-no-register">
                  {/*<a className="no-register" href='/app2'>Não possui conta? Cadastre-se</a>*/}
                  {/*<Link to="/app2" className="no-register">Não possui conta? Cadastre-se</Link>*/}
                </div>
              </form>
            </div>
          </div>        
        </div>
    );
  }

export default App2