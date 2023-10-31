import styled from "styled-components";

export const ContainerSideLeft = styled.div`
    position: relative;

    
    select{
        position: absolute;
        top: 92px;
        left: 96px;
        z-index: 100;
        width: 215.91px;
        height: 45.2px;
        text-align: left;
        padding-left: 18px;
        font-size: 15px;
        color: #333333;
        outline: none;
        cursor: pointer;
        border: none;
        border-radius: 6px;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        font-weight: 500;
    }
    &::after{
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent; 
    border-right: 5px solid transparent;
    border-top: 5px solid #848484;  
    position: absolute;
    top: 114px;
    left: 286px;
    z-index: 100;
    transform: translateY(-50%);
    }
    #trevo{
        position: absolute;
        z-index: 100;
        left: 95.79px;
        top: 412.04px;
    }
    #titleMega{
        font-weight: bold;
        position: absolute;
        color: white;
        top: 406.44px;
        left: 177.75px;
        z-index: 100;
    }
    #concurso{
        position: absolute;
        top: 654px;
        left: 96px;
        z-index: 100;
        color: white;
        font-size: 0.875rem;
     
    }
    #dataPost{
        position: absolute;
        top: 697px;
        left: 96px;
        z-index: 100;
        font-size: 20px;
        color: white;
        font-weight: bold;
    }

`
export const ContainerRigthSide = styled.div`
    position: absolute;
    left: 639.59px;
    top: 386.44px;
    overflow-x: auto;

    #teste{
        display: flex;
        animation: slide 35s linear infinite;
        gap: 45px;
        padding: 10px;
 
    }
    span{

        border-radius: 100%;
        padding: 40px;
        font-size: 27px;
        font-weight: bold;
        background-color: #fff;
        color: #333333;
        box-shadow: 2px 2px 12px rgba(1,1,1,0.2);
 
    }

    @keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
`