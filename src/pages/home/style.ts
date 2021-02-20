import styled, {css} from "styled-components";
import bgImage from "../../img/happy.png";


export const Container = styled.div`
    background-color: #8C52E5;
    height: 100%;
    min-height: 100vh;
`

export const Header = styled.div`
    img{
        margin: 40px;
    }
`

export const SectionOne = styled.div`
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: bottom;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        margin: 40px;
    }
    .middle-div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 80px;
        .access-div{
            flex: 0;
            color: white;
            font-size: 20px;
            h2{
                margin-bottom: 25px;
            }
            button{
                cursor: pointer;
                border: none;
                border-radius: 100px;
                padding: 15px 30px;
                width: 250px;
                text-align: left;
                transition: 0.5s;
                color: #8C52E5;
                font-size: 20px;
                font-weight: 300;
                &:hover{
                    background: #68DE5A;
                }
            }
        }
        .signup-div{
            background: white;
            border-radius: 15px;
            padding: 20px;
            flex: 0;
            
            div{
                margin: 20px;
            }
            form{
                padding: 12px;

                .hasError{
                    border-bottom: 2px solid red;
                    background: #fed1d1;
                    }

                input{
                    display: initial;
                    border: none;
                    font-size: 16px;
                    padding: 8px;
                    font-weight: 300;
                    text-align:left;
                    width: 85%;
                    margin: 25px;
                    border-bottom: 2px solid #666;
                    transition: 0.5s;

                    &:focus{
                        border-bottom: 3px solid #8C52E5;

                    }
                }
            }
            
            h4{
                font-size: 25px;
                margin-bottom:20px;
            }

            button{
                cursor: pointer;
                border: none;
                border-radius: 100px;
                padding: 15px 30px;
                width: 325px;
                text-align: left;
                transition: 0.5s;
                color: #8C52E5;
                font-size: 20px;
                font-weight: 300;
                border: 3px solid #8C52E5;
                margin: 20px 0;
                &:hover{
                    background: #68DE5A;
                }
                &:disabled{
                    border: 3px solid #666;
                    color: #666;
                    cursor: disabled;

                    &:hover{
                    background: #FFF;
                }
                }
            }
        }
    }
`