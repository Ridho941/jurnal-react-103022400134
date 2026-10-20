import { useState } from 'react'
import './App.css'
import './index.css'
import { Component } from 'react'
import Panel from './components/Panel.jsx'
import KartuMenu from './components/kartuMenu.jsx'

function App() {
  const [count, setCount] = useState(0)
  const nama = "Ridho";
  const N = 34; 
  const jam = 9;

  return (
    <>
      <body>
        <h1 className="judul">Kantin {nama}</h1>
        <p>Selamat {jam < 12 ? 'Pagi' : 'Siang'}</p>
        <p>Saldo Awal Kantin Rp: {N * 1000}</p>

        <button disabled>Bayar</button>

        <div>
          <Panel judul="Menu Hari Ini">
            <KartuMenu nama="Nasi Ayam Geprek" harga="13.700" />
            <KartuMenu nama="Es Teh Lemon" harga="13.700" kategori="Minuman"/>
            <KartuMenu nama="Mie Goreng Telur" harga="12.000"/>
          </Panel>
        </div>
      </body>
    </>
  )
}

export default App
