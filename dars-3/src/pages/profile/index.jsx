import './app.css';

function Profile() {
    return (
      <>
        <div className="Pro">
          <div className='ProInfo'>
            <h3 className='ProName'>Александр Суворов</h3>
            <p className='ProIn'><i class="fa-solid fa-phone"></i>+7 (977) 980-12-09</p>
            <p className='ProIn'><i class="fa-solid fa-envelope"></i>alexander@mail.com</p>
            <button className='ProInfoBtn'>Изменить</button>
          </div>
          <div className="ProCart">
            <h3 className='ProCartTitle'>Адреса доставки</h3>
            <div className="ProCartList">
              <div className="ProCartItem">
                <div className="ProItemTop">
                  <h4 className='ProItemTopTitle'>Крутые Ключи</h4>
                  <i class="fa-solid fa-trash"></i>
                </div>
                <div className="ProItemBot">
                  <i class="fa-solid fa-house"></i>
                  <p className='ProItemText'>Россия, 443001 , обл. <br /> Самарская, г. Самара, <br /> промышленная зона Крутые <br /> Ключи, д. 33</p>
                </div>
              </div>
              <div className="ProCartItem">
                <div className="ProItemTop">
                  <div>
                  <p className='ProLogo'>OZON</p>
                  <h4 className='ProItemTopTitle'>Пункт Ozon</h4>
                  </div>
                  <i class="fa-solid fa-trash"></i>
                </div>
                <div className="ProItemBot">
                  <i class="fa-solid fa-shop"></i>
                  <p className='ProItemText'>Россия, обл. Самарская, г. <br /> Самара, ул. Пушкина, д. 194</p>
                </div>
              </div>
              <div className="ProCartItem">+  Добавить адрес</div>
            </div>
          </div>
          <button className='ProBotBtn'>Выйти</button>
        </div>
      </>
    );
  }
  
  export default Profile;