<script>
    
    let email = "";
    let password = "";
    function handleSubmit() {
      console.log("Email:", email);
      console.log("Password:", password);
    }
   

  function goToOtherPage() {
    window.location.href = 'http://localhost:58467'; 
  }


    
  </script>
<header class="headerfirst">
    <div class="logo">
   <img src="images/logo.png" alt=""/>
    <div class="title">SuperJournal</div>
    </div>
    <div class="buttons">
      <button class="exit" on:click={() => goto("/")}>Войти</button>
      <button class="registration" on:click={goToOtherPage}>Регистрация</button>
    </div>
</header>
<div class="all">
<div class="form-container">
    <h2>Авторизация</h2>
    <input type="email" bind:value={email} placeholder="Электронная почта" />
    <input type="password" bind:value={password} placeholder="Пароль" />
    <button class="exit" on:click={handleSubmit}>Войти</button>
  </div>
 
</div>
<div class="footer">
    &copy; 2023 SuperJournal. Все права защищены.
  </div>

  

  <style>

  

  h2{
    color:var(--primary-color2);
  }
   :root {
    --primary-color: #334E5C; 
    --primary-color2: #9DD7F5; 
    --primary-color3: #062433; 

  }

  .all {
    background-color: var(--primary-color3);
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100vh;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 326px;
    border-radius: 30px;
    background-color: var(--primary-color);
    margin: auto;
  }

  input {
    margin: 10px 0;
    padding: 8px;
    border-radius: 20px;
  }

  button {
    text-align: center;
    margin-top: 10px;
    padding: 10px;
    background-color: var(--primary-color2);
    border: none;
    cursor: pointer;
  }
    .headerfirst {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background-color: var(--primary-color)
    }
    
    .logo {
    
      display: flex;
      align-items: center;
    }
  
    img {
    
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  
    .title {
      color: var(--primary-color2);
      font-size: 24px;
      font-weight: bold;
    }
  
    .buttons {
      
      display: flex;
    }
    .registration{  
    width: 130px; 
    height: 36px;
    border: 2px solid var(--primary-color2); 
    border-radius: 25px; 
    background-color: transparent;
    cursor: pointer; 
    color: var(--primary-color2);

    }
    .exit{
        color: var(--primary-color);
        width: 80px; 
        height: 36px; 
        background-color: var(--primary-color2);
        border-radius: 30%;
        border-radius: 25px;
        cursor: pointer;
    }
    button {
      margin-left: 10px;
      padding: 5px 10px;
      
    }
    .footer {
    background-color: var(--primary-color);
    color: white;
    padding: 25px;
    text-align: center;
  }

  </style>
  

  

  