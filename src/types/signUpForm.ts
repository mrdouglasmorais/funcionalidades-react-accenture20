export interface FormValueSignUp {
    cpf: string;
    name: string;
    username: string;
    password: string;
    repassword: string;
}

export interface OtherProps {
    title?: string;
}

export interface MyFormPropsSignUp {
    initialCPF?: string;
    initialName?: string;
    initialUsername?: string;
    initialPassword?: string;
    initialRepassword?: string;
}