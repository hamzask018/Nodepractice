
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzF3ewbxy8nS30bz7Kton0PVhpXDsO6oNXuzNGtrwcTk2cYNqqV2rZlgbhofH8QdlVVmQ/exec'
            const form = document.form['google-sheet']
          
            form.addEventListener('send', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
