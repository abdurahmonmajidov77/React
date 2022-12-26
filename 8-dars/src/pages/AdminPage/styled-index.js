import styled from "styled-components"

export const Wrapper = styled.div`
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        .AdminNav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 20px;
            h1{
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 700;
                font-size: 40px;
                line-height: 60px;       
                letter-spacing: 0.02em;
                color: #FE1F27;
                img{
                    width: 50px;
                    margin-right: 10px;
                }
            }
            .button{
                border: none;
                outline: none;
                background-color: #FE1F27;
                color: white;
                padding: 10px 20px;
                border-radius: 8px;
                font-weight: 400;
                font-size: 16px;
                cursor: pointer;
                color: #FFFFFF;
            }
            .button:hover{
                background-color: #750B0A;
            }
        }
        .AdminMain{
            width: 100%;
            padding: 50px 60px;
            display: flex;
            justify-content: center;
            .mainBox{
                /* position: relative; */
                display: flex;
                padding-top: 70px;
                padding-bottom: 70px;
                justify-content: center;
                align-items: center;
                background: #151515;
                border-radius: 24px;
                width: 100%;
                .AdminMainTexts{
                    display: flex;
                    flex-direction: column;
                    margin-right: 400px;
                    .h1{
                        font-weight: 600;
                        font-size: 45px;
                        color: #FFFFFF;
                        flex-wrap: wrap;
                        width: 400px;
                        display: flex;
                        margin: 10px 0;
                        h1:nth-child(1){
                            color: #FE1F27;
                            margin: 0 10px;
                            font-weight: 600;
                            font-size: 45px;
                            flex-wrap: wrap;
                            display: flex;
                        }
                        h1:nth-child(2){
                            width: 100px;
                            font-weight: 600;
                            font-size: 45px;
                            color: #FFFFFF;
                            flex-wrap: wrap;
                            display: flex;
                            display: block;
                        }
                    }
                    p{
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 24px;
                        letter-spacing: 0.02em;
                        color: #FBFBFB;
                    }
                    .btn{
                        border: none;
                        outline: none;
                        background-color: #FE1F27;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 8px;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 24px;
                        color: #FFFFFF;
                        width: 150px;
                        margin-top: 30px;
                    }
                    .btn:hover{
                        background: #750B0A;
                    }
                }
            }
            .MainImgBox1{
                position: relative;
                img{
                    position: absolute;
                    width: 1000px;
                    left: -600px;
                    top: -360px;
                }
            }
            .AdminList{
                display: flex;
                flex-direction: column;
                width: 100%;
                h2{
                    font-weight: 500;
                    font-size: 42px;
                    line-height: 47px;
                    letter-spacing: 0.02em;        
                    color: #FFFFFF;
                }
                .ul{
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-wrap: wrap;
                    width: 100%;
                    .li{
                        width: 300px;
                        padding: 10px;
                        margin: 10px;
                        background: #202020;
                        box-shadow: 1px 13px 73px rgba(0, 0, 0, 0.15);
                        border-radius: 24px;
                        display: flex;
                        flex-direction: column;
                        img{
                            width: 350px;
                            margin: 10px;
                        }
                        h3{
                            font-weight: 500;
                            font-size: 24px;
                            line-height: 36px;                   
                            text-align: center;
                            letter-spacing: 0.02em;
                            color: #FFFFFF;
                            margin: 10px;
                        }
                        .mah3{
                            font-weight: 500;
                            font-size: 20px;
                            line-height: 36px;                   
                            text-align: center;
                            letter-spacing: 0.02em;
                            color: #202020;
                        }
                    }
                }
            }
        }
    }
`