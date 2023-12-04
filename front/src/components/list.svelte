<script>
     let username = 'John Doe';
     let less ='Русский язык'
     let teach = 'Иванов Иван Иванович'
</script>
<header class="headerthird">
    <div class="logo">
   <img src="" alt=""/>
    <div class="title">SuperJournal</div>
      <div class="profil">
        <div class="name">{username}</div>
        <img class="user" src="" alt=""/>
      </div>
    </header>

    <div class="all">
    <div class="lessons">
      <input type="search">
      <div class="lesson">{less}
      <p>{teach}</p>
      </div>
      <div class="lesson">{less}
        <p>{teach}</p>
      </div>
      <div class="lesson">{less}
        <p>{teach}</p>
      </div>
      <div class="lesson">{less}
        <p>{teach}</p>
      </div>
    </div>
  </div>
<style>
  p{
    
  }
  .lesson{
    height: 50px;
background-color: aliceblue;
margin: 10px;
padding: 20px;
  }
  .lessons{
   
    flex-direction: column;
    align-items: left;
    justify-content: left; 
    margin: auto;
  }
  .user{
    width: 40px;
      height: 40px;
      margin-right: 10px;
  }
  .name{
    color: var(--primary-color2);
      font-size: 24px;
      font-weight: bold;
  }
  .profil{
    display: flex;
      justify-content: flex-start;
      align-items: center;
      

  }
    .headerthird {
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
    .all{
      background-color: var(--primary-color3);
     padding: 30px;

     
      height: 100vh;
    }

</style>