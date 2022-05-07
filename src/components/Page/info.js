import React from 'react';

function Wiki() {
  const contPadd={
    padding: '0px',
  }
  const tabsTop={
    borderRadius: '10px 10px 0 0',
  }
  const tabsBottom={
    borderRadius: '0 0 10px 10px',
  }
  return (
    <div className='PageCon infoCon'>
      <div className='content-bar'>

        <div className='description contentText'>
          На этой странице представлены описания и история создания всех проектов Linted.Group на данный момент. 
        </div>

        <div id ='linted' className='contentText' style={contPadd}>
          <h1>Linted</h1>
          Linted (Linted.Group) - основан в апреле 2021 разработчиком-энтузиастом Степаном Вышнеградским как форум, посвященный информационным технологиям и в первую очередь - кибербезопасности. Форум существовал в период с апреля до июля 2021, после чего форум был отправлен в долгий ящик до лучших времен. В сентябре 2021 форум был преобразован в локальную IT-компания Linted.Group, включающую в себя множество иных подразделений и отвлетвлений от разработки сайтов до создания игр.  
        </div>
        <div id ='grobind' className='contentText'>
          <h1>Grob.ind</h1>
          Grob.ind был основан в феврале 2021 года тремя python - программистами (Максимом Бацевым, Кириллом Бобиным, Степаном Ивановым(Вышнеградским)) по инициативе Кирилла Бобина, который в последствии и возглавил Grob.ind.

          С февраля по конец апреля был самый продуктивный этап в жизни компании : были заложены основные принципы, была разработана первая игра, намечалось создание других игр и была создана самая первая версия официального сайта компании.

          С мая по октябрь Grob.ind стал затухать и распадаться, встав на рельсы стагнации, близивших к концу. В октябре 2021 года в силу застоя компания была поглащена Linted.Group, став тем самым дочерним подразделением по разработке игр.
          Сайт: <a href='https://verblud1.github.io/grob.ind/'>https://verblud1.github.io/grob.ind/</a>
        </div>
        <div id ='qagram' className='contentText'>
         <h1>Qagram</h1>
         Qagram - это отечественный проект соцсети, стремящийся заменить instagram и многие иные зарубежные сети на постсоветском пространстве.      
        </div>
        <div id ='velicior' className='contentText'>
          <h1>Velicior</h1>
          Разрабатывающийся проект соцсети для создания и обмена собственным творчеством, где можно будет удобно делится своими фанфиками, стихами, рассказами, цитатами и т.п. 
        </div>

      </div>

      <div className='nav-bar'>
        <a href='#linted' className='tabs-tabs' style={tabsTop}>Linted</a>
        <a href='#grobind' className='tabs-tabs'>Grob.ind</a>
        <a href='#qagram' className='tabs-tabs'>Qagram</a>
        <a href='#velicior' className='tabs-tabs' style={tabsBottom}>Velicior</a>
      </div>
    </div>

  );
}

export default Wiki;