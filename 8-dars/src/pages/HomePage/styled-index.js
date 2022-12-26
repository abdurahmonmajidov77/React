import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    .Sidebar{
        z-index: 3;
        padding: 40px 20px;
        height: 100%;
        color: white;
        position: fixed;
        background: #101010;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        top: 0;
        left: 0;
        box-shadow: 0 0 175px 140px rgba(0, 0, 0, 1);
        .SidBtn{
            border: none;
            outline: none;
            background: none;
            display: flex;
            align-items: center;
            cursor: pointer;
            img{
                width: 35px;
            }
            .SidItem1{
                font-weight: 600;
                font-size: 32px;
                line-height: 39px;
                display: flex;
                align-items: center;
                color: #FFFFFF;
                margin-left: 10px;
                cursor: pointer;
            }
        }
        .SidBtna{
            display: none;
        }
        .SidList{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: auto 0;
        }
        .SidItem{
                display: flex;
                align-items: center;
                font-weight: 600;
                font-size: 20px;
                line-height: 27px;
                text-align: center;
                margin: 10px 0;
                color: #686868;
                border: none;
                outline: none;
                background: none;
                cursor: pointer;
                i{
                    margin-right: 10px;
                    margin-left: 5px;
                    font-size: 21px;
                }
            }
            .SidItem:hover{
                color: white;
            }
            .SidList1{
                margin-top: 30px;
            }
    }
    .SidRight{
        padding-left: 182px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        overflow: hidden;
        .Header{
            display: flex;
            align-items: center;
            position: relative;
            background: linear-gradient(to right, rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.0));
            width: 100%;
            height: 600px;
            img{
                width: 100%;
                position: absolute;
                z-index: -2;
                top: 0;
                left: 0;
            }
            .HeaderTexts{
                width: 400px;
                padding: 20px;
                padding-left: 33px;
                margin: auto 0;
                margin-left: 50px;
            }
            .HeadTitle{
                font-weight: 600;
                font-size: 38px;
                line-height: 58px;
                color: #FFFFFF;
            }
            .HeadText{
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;        
                color: #CDCDCD;
                margin: 10px 0;
            }
            .HeadBox{
                display: flex;
                align-items: center;
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                display: flex;
                align-items: center;  
                color: #FFFFFF;
                margin: 5px 0;
            }
            .HeadRate{
                background-color: yellow;
                padding: 2px;
                border-radius: 2px;
                color: black;
                border: 0.1px solid black;
                margin-right: 5px;
            }
            .HeadBl{
                color: #D50000;
            }
            .HeadBntBox{
                display: flex;
                align-items: center;
                margin-top: 10px;
            }
            .HeadBtn{
                border: none;
                outline: none;
                background: #D50000;
                padding: 10px 20px;
                margin: 10px;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                text-align: center;
                color: #FFFFFF;
            }
            .HeadBtn:hover, .HeadBtn1:hover{
                transform: scale(1.05);
            }
            .HeadBtn1{
                border: none;
                outline: none;
                background: white;
                padding: 10px 20px;
                margin: 10px;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                text-align: center;
                color: black;
                margin: 10px;
            }

        }
        .List{
            width: 1000px;
            padding: 20px 0;
            background: linear-gradient(to left, rgba(0, 0, 0, 5.5) 20%, rgba(0, 0, 0, 0.5) 2%, rgba(0, 0, 0, 0.0));
            .Slider{
                padding: 20px 0;
                .ListItem{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 10px;
                    padding: 0;
                    .ListItemTitle{
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 17px;
                        color: #FFFFFF;
                    }
                }
            }
        }
    }
`