import styled from "styled-components";

export const MaterialHalfBg = styled.div`
    height: 100vh;
    background-color: #e7e7e7;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    .cover {
      background-color: #009688;
      height: 50vh;
    }

`;

export const LoginContent = styled.div `

    .material-half-bg {
        height: 10vh;
        background-color: #e7e7e7;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }

    .material-half-bg .cover {
        background-color: #009688;
        height: 90vh;
    }

    .login-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        min-height: 100vh;
    }

    .login-content .logo {
        margin-bottom: 40px;
        font-family: "Roboto";
        color: #fff;
    }

    .login-content .logo h1 {
        font-size: 52px;
        font-weight: 400;
    }

    .login-content .login-box {
        position: relative;
        min-width: 650px;
        min-height: 450px;
        background-color: #fff;
        -webkit-box-shadow: 0px 29px 147.5px 102.5px rgba(0, 0, 0, 0.05), 0px 29px 95px 0px rgba(0, 0, 0, 0.16);
                box-shadow: 0px 29px 147.5px 102.5px rgba(0, 0, 0, 0.05), 0px 29px 95px 0px rgba(0, 0, 0, 0.16);
        -webkit-perspective: 800px;
                perspective: 800px;
        -webkit-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }

    .login-content .login-box .login-head {
        margin-top: 0;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
        text-align: center; 
    }

    .login-content .login-box label {
        color: #666666;
        font-weight: 700; 
    }

    .login-content .login-box .btn-container {
        margin-bottom: 0;
    }

    .login-content .login-box .login-form {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 40px;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        -webkit-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }

    @media(max-width: 351px) {
        .login-content .login-box {
            min-width: 100%;
        }
        .login-content .login-box .login-form {
            width: 100%;
        }
    }

    .btn-margin{
        margin: 30px 0;
    }

`;