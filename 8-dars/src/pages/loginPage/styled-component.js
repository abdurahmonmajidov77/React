import styled from "styled-components"

export const LoginWrap = styled.div`
    .container{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        img{
            width: 685px;
            bottom: 0;
        }
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 25px;
            background-color: var(--black-gray);
            border-radius: 15px;
            input{
                background: var(--gray);
                padding: 7px 10px;
                margin: 10px 0;
                color: var(--white);
                border-radius: 15px;
            }
            input::placeholder{
                color: var(--white);
            }
            p{
                color: var(--gray);
                margin: 5px 0;
            }
            span{
                display: flex;
                justify-content: space-between;
                align-items: center;
                p, a{
                    font-size: 13px;
                    margin-left: 3px;
                }
                a{
                    margin-left: 7px;
                }
            }
            img{
                width: 150px;
            }
            a{
                color: var(--red);
                font-size: 16px;
            }
            button{
                color: var(--white);
                background-color: var(--red);
                padding: 5px 10px;
            }
            button:hover{
                color: var(--red);
                background: none;
            }
        }
    }
`