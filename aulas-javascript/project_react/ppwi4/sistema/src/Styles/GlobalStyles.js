import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
 * {
      margin: 0%;
      padding: 0%;
      box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #FFF;
 }
 
 html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
 } 

 *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', Verdana, Tahoma, sans-serif;

 }

 aside, header, main, nav, section {
    display: block;
 }
  

 .app-breadcrumb {
    margin-top: 10px;
    margin-bottom: 0;
    text-align: right;
    font-weight: 500;
    font-size: 13px;
    text-transform: capitalize;
    padding: 0;
    text-align: left;
    padding: 0;
    background-color: transparent;
}

@media (max-width: 480px) {
  .app-breadcrumb {
    margin-top: 10px;
  }
}

@media (max-width: 767px) {
  .app {
    overflow-x: hidden;
  }
}

.btn-block {
  display: block;
  width: 100%;
}


.ellipsis {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
}

#drop-zone {
  padding-top: 10px;
  width: 100%;
  min-height: 50px;
  border-radius: 5px;
  font-family: Arial;
  position: relative;
  font-size: 20px;
  text-align: center;

}

#drop-zone input {
  cursor: pointer;
  left: 0px;
  top: 0px;
  opacity: 0;
  color: #7E7E7E;
}

#drop-zone.mouse-over {
   border: 3px dashed rgba(0, 0, 0, .3);
   color: #7E7E7E;
}

.avatar {
  width:70%
  display:block;
  border-radius: 50%;
  height: auto;
  margin: 0 auto;
}

#clickHereLeft {
  margin-left: 20%;
  cursor: pointer;
  color: white;
  font-size: 17px;
  width: 100px;
  height: 45px; 
  border-radius: 4px;
  background-color: #4679BD;
  padding-top: 10px;
  float:left;
}

#clickHereRight {
  margin-right: 20%;
  cursor: pointer;
  color: white;
  font-size: 17px;
  width: 100px;
  height: 45px; 
  border-radius: 4px;
  background-color: #ff0000;
  padding-top: 10px;
  float:right;
}

.fontSize {
  font-size: 1.2rem;
  font-weight: 600; 
}

.input-container {
   display:flex;
   width: 100%;
   margin-bottom:15px;
}

.icon-input {
  padding: 10px;
  background-color: #E5E5E5;
  color: black;
  min-width:50px;
  text-align: center;
  font-size:17px;
}

.show-message{
  font-weight: 700;
  font-size: 20px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 6px;
  width: 300px;
  height: 18px;
}

.show-image{
  float: left;
  margin-right: 15px;
  width: 30px;
  height: 30px;
}

.closebtn{
  color: white;
  font-weight: 800;
  float: right;
  font-size: 25px;
  cursor: pointer;
  transition: 03s;
}

.closebtn :hover{
  color: red;
}

`