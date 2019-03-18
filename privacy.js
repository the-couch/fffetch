
module.exports = (
  `
    <div>
      <head>
        <title>fffetch</title>
        <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet">
        <style>
          * {
            box-sizing: border-box;
          }
          body, html {
            font-family: 'Space Mono';
          }
          h2 {
            font-family: 'Space Mono', monospace;
          }
          .container {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
          }
          .content {
            padding-top: 30px;
          }
          a {
            color: #000;
          }
          svg {
            width: 30px;
            height: 30px;
          }
          .nounderline {
            text-decoration: none;
          }
          .mt1 {
            margin-top: 1rem;
          }
          .ml05 {
            margin-left: 0.5rem;
          }
          .s-i {
            font-family: 'Space Mono';
            outline: none;
            padding: 1rem;
          }
          .s-s {
            width: 32%;
          }
          .logger {
            width: 100%;
            margin-top: 30px;
            height: 140px;
            padding: 5px;
            overflow: scroll;
            background-color: #000;
          }
          .logger span {
            font-size: 0.7rem;
            color: white;
            display: block;
          }
          .logger span.error {
            color: red;
          }
          .logger span.success {
            color: green;
          }
          form label span {
            padding-bottom: 30px;
          }
          form button {
            border: 0;
            cursor: pointer;
            padding: 12px 18px;
            background-color: black;
            color: white;
          }
          pre {
            color: light-grey;
            font-family: 'Space Mono';
            font-size: 11px;
            border: 1px solid black;
            padding-top: 1em;
            margin: 15px 0 15px 0;
            width: 585px;
          }

        </style>
      </head>
      <div class='container'>
        Use at your own risk
      </div>
      <a href="https://www.iubenda.com/privacy-policy/47713537" class="iubenda-white iubenda-embed iub-legal-only" title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
    </div>
  `
)
