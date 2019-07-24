import React from 'react';
import './Rules.css';

export default function Rules() {
  return (
    <>
    <main className='Rules'>
      <header className="Rules--heading">
        <h1>Rules of the Game</h1>
        <h3>Setup</h3>
      </header>
      <section className='Rules--content'>
        <ul className='Rules--list'>
          <li>Each player receives 10 white cards.</li>
          <li>First player who logs in to the room is the first czar.</li>
          <li>Player who is the Card Czar receives a black card.</li>
        </ul>
      </section>
      <header className='Rules--heading'>
        <h3>Gameplay</h3>
      </header>
      <section className='Rules--content'>
        <ul className='Rules--list'>
          <li>The card Czar has the black card that has either a fill in the blank or a question.</li>
          <li>The other players select one of their white cards as an answer to the Card Czar.</li>
          <li>The Card Czar will choose the answer that they like best.</li>
          <li>The player who's card was selected gets a point and becomes the new Card Czar.</li>
        </ul>
      </section>
      <header className='Rules--heading'>
        <h3>Winning</h3>
      </header>
      <section className='Rules--content'>
        <ul className='Rules--list'>
        <li>The winner is the first to reach 5 Points</li>
        <li>Players all laugh, select the end game button, and then all history of their filth is erased from history.</li>
        </ul>
      </section>
      <header className='Rules--heading'>
        <h3>Legal Stuff</h3>
      </header>
      <section className='Rules--content'>
        <ul className='Rules--list'>
          <li>Cards Against Humanity<span role='img' aria-label='registered trademark'>®️</span> is a registered trademark and is in no way affiliated with us.</li>
          <li>If you steal their name they will "smash you."</li>
          <li>Cards Against Humanity<span role='img' aria-label='registered trademark'>®️</span> has graciously offered up their cards under the <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank" rel="noopener noreferrer">Creative Commons BY-NC-SA 2.0 License</a>, which means you can use, remix, and share the game for free, but you can't sell it without their permission.</li>
          <li>The digitalized form of the cards was awesomely put together for reuse under the effort of <a href="https://crhallberg.com/cah" target="_blank" rel="noopener noreferrer">Chris Hallberg: JSON Against Humanity</a> and others.</li>
        </ul>
      </section>
    </main>
    </>
  )
}
