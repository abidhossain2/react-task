const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://test.nexisltd.com/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(res => res.json())
      .then(data => { 
        if(data?.access_token) {
          fetch('https://test.nexisltd.com/test', {
            headers:{
              'content-type': 'application/json',
              'Authorization':`Bearer ${data?.access_token}`
            }
          })
          .then(res => res.json())
          .then(data => Object.entries(data).map(([key,value], i) => {
            const a =  value.attendance;
            Object.entries(a).map(([key, value], i) => {

              return console.log(key, value?.status);
            })
          }))
        }
      else{
        console.log('bye');
      }})

  }
