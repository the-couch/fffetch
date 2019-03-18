
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
        <h2>
          fffetch
        </h2>
        <div class='content'>
          fetch an array of urls to prepopulate facebook open graph data
        </div>
        <div style='margin-top: 20px;'>
          example json file:
          <pre>
  {
    "urls": [
      "https://thecouch.nyc",
      "https://kevingreen.sucks"
    ]
  }
          </pre>
        </div>
        <div style='margin-top: 20px;'>
          <form id='form'>
            <div style='margin-bottom: 10px;'>
              <label for='current_namespace' style='width: 108%'>
                <input required class='js-file s-i'  style='width: 100%; padding-left: 0;' name='file' type='file' />
              </label>
            </div>
            <div class='mt1'>
              <button type='submit' id='magic'>Pew pew pew</button>
            </div>
          </form>
        </div>
        <div class='logger'>
          <div id='logger'></div>
          <span>this is the logger...</span>
        </div>
        <div class='content'>
          <p>Created by <a href="https://thecouch.nyc">The Couch</a></p>
        </div>
      </div>
      <script>
        var form = document.getElementById('form')
        var logger = document.getElementById('logger')
        var magic = document.getElementById('magic')
        var jsonForm = {}
        form.addEventListener('submit', (e) => {
          e.preventDefault()
          var file = form.elements.file.files[0]
          magic.innerHTML = 'Doing stuff...'
          var fr = new FileReader()
          fr.onload = function(e) {
            var parsedFile = JSON.parse(fr.result)
            var urls = parsedFile.urls
            urls.forEach(function(url) {

              fetch('/api/fetch', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify({url: url})
              }).then((response) => {
                return response.json()
              }).then((json) => {
                if (json.error) {
                  var span = document.createElement('span')
                  span.classList.add('error')
                  span.innerHTML = json.msg
                  let logP = logger.parentNode
                  logP.insertBefore(span, logger)
                  magic.innerHTML = 'Try again'
                } else {
                  var span = document.createElement('span')
                  span.innerHTML = 'successfully fetched ' + url
                  let logP = logger.parentNode
                  logP.insertBefore(span, logP.childNodes[0])
                  magic.innerHTML = 'pew pew pew'
                }
              })
            })
          }
          fr.readAsText(file)
        })
      </script>
    </div>
  `
)
