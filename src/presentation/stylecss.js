const style = document.createElement('style')

style.innerText = `*{
	box-sizing: border-box;
}

.message{
	position: relative;
	width: 100%;
	padding: 20px;
	padding-left: 60px;
	color: white;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	height: auto;
	min-height: 80px;
}

.message:nth-child(even){
	background-color: #2e2f5c;
}

.message .person-icon {
	position: absolute;
	width: 40px;
	height: 40px;
	top: 20px;
	left: 10px;
	background-color: tomato;
	text-align: center;
	border-radius: 6px;
	line-height: 40px;
	font-weight: 700;
}

.message.server .person-icon{
	background-color: lightgreen;
}

.message .inner{
	width: 100%;
}

.spinner {
  margin: 0 -15px;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 10px;
  height: 10px;
  background-color: #888;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}`;

document.head.appendChild(style);