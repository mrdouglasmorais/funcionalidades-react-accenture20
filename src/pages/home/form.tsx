// import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import InputMask from "react-input-mask";
import { toast } from 'react-toastify';

import api from '../../services/api';
import { SectionOne } from './style';

import { OtherProps, FormValueSignUp, MyFormPropsSignUp} from '../../types/signUpForm';



const InnerForm = (props: OtherProps & FormikProps<FormValueSignUp>) => {
    
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = props;

    return (
        <SectionOne>
            <div className="middle-div">
                <div className="access-div">
                    <h2>Gama Bank é um projeto de nossos alunos.</h2>
                    <h2>Já tem conta?</h2>
                    <Link to="/login">
                        <button>Acessar</button>
                    </Link>
                </div>
                <div className="signup-div">
                    <div>
                        <h4>
                            Peça sua conta e cartão de crédito Gama Bank
                        </h4>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <InputMask 
                            mask="999.999.999-99"
                            width={50}
                            type="text"
                            name="cpf"
                            className={ errors.cpf ? 'hasError' : ''}
                            placeholder={errors.username ? "Informe seu CPF" : "Informe seu CPF"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cpf}
                        />

                        <input
                            width={50}
                            type="text"
                            name="name"
                            className={ errors.name ? 'hasError' : ''}
                            placeholder={errors.username ? "Informe seu nome completo" : "Informe seu nome completo"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />

                        <input
                            width={50}
                            type="text"
                            name="username"
                            className={ errors.username ? 'hasError' : ''}
                            placeholder={errors.username ? "Escolha um nome de usuário" : "Escolha um nome de usuário"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                        />

                        <input
                            width={50}
                            type="password"
                            name="password"
                            className={ errors.password ? 'hasError' : ''}
                            placeholder={errors.username ? "Escolha uma senha" : "Escolha uma senha"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />

                        <input
                            width={50}
                            type="password"
                            name="repassword"
                            className={ errors.repassword ? 'hasError' : ''}
                            placeholder={errors.username ? "Confirme sua senha" : "Confirme sua senha"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.repassword}
                        />

                        <button
                            type="submit"
                            disabled={
                                isSubmitting ||
                                !!(errors.cpf && touched.cpf) ||
                                !!(errors.name && touched.name) ||
                                !!(errors.username && touched.username)
                            }
                        >
                            Continuar
                        </button>
                    </form>
                </div>
            </div>
        </SectionOne>
    );
};




const App = withFormik<MyFormPropsSignUp, FormValueSignUp>({
    
    mapPropsToValues: props => ({
        cpf: props.initialCPF || "",
        name: props.initialName || "",
        username: props.initialUsername || "",
        password: props.initialPassword || "",
        repassword: props.initialRepassword || ""
    }),

    validationSchema: Yup.object().shape({
        cpf: Yup.string().required("CPF inválido"),
        name: Yup.string().required("Informe seu nome"),
        username: Yup.string().required("informe seu nome de usuário"),
        password: Yup.string().required("Senha é obrigatória"),
        repassword: Yup.string().required("Confira sua senha")
    }),

    handleSubmit(
        { cpf, name, username, password, repassword }: FormValueSignUp,
        { props, setSubmitting, setErrors }
    ) {
        console.log(cpf, name, username, password, repassword )
        // const history = useHistory();

        // const postData = {
        //     cpf: cpf.replace(/[^\d]/g, ""),
        //     nome: name,
        //     login: username,
        //     senha: password
        //   }
          
        //   if ( password !== repassword ) {
        //     toast.error('Sua senha está incorreta!') 
        //     return;
        //   }
      
        //   try {
        //     api.post(`usuarios`, postData ).then(
        //       response => { 
        //         if (response.status === 200){
        //             // history.push('/login')
        //         } else {
        //             toast.error('Algo deu errado')
        //         } 
                
        //        }
        //     )
        //   } catch (err) {
        //     toast.error('Confirm seus dados')
        //   }
    }
})(InnerForm);

export default App;
